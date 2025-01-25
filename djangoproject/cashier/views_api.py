from rest_framework import viewsets, status
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.decorators import action
from cashier.models import StripePayment, Customer, Order
from cashier.serializers import (
    StripePaymentSerializer,
    CustomerSerializer,
    OrderSerializer,
    FundsCreditSerializer,
    FundsDebitSerializer,
)
from cashier.stripe_tools import create_payment_intent, update_payment_intent, retrieve_intent
from datetime import datetime


class CheckoutView(APIView):
    permission_classes = [IsAuthenticated]

    def post(self, request, *args, **kwargs):
        # get create customer
        customer, created = Customer.objects.get_or_create(user=request.user)
        # get or create session
        if not request.session.session_key:
            request.session.create()
        # check if a StripePayment already exists for this session
        payment = StripePayment.objects.filter(
            session_key=request.session.session_key
        ).last()
        if payment and payment.intent["status"] == "requires_payment_method":
            intent_id = payment.intent["id"]
            # update the payment intent with the new amount
            intent = update_payment_intent(intent_id, request.data["amount_pennies"])
            if intent:
                payment.intent = intent
                payment.update_amount()
        else:
            # create a payment intent and a new order
            intent = create_payment_intent(request.data["amount_pennies"])
            payment = StripePayment.objects.create(
                intent=intent,
                customer=customer,
                amount_pennies=request.data["amount_pennies"],
                session_key=request.session.session_key,
            )
            order = Order.objects.create(payment=payment, customer=customer)
        return Response(
            StripePaymentSerializer(payment).data, status=status.HTTP_200_OK
        )

class ConfirmPaymentView(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request, *args, **kwargs):
        # get the payment from the session key
        payment = StripePayment.objects.filter(
            session_key=request.session.session_key
        ).last()
        intent_id = payment.intent["id"]
        intent = retrieve_intent(intent_id)
        payment.intent = intent
        payment.save()
        order = payment.order
        order.confirm_status()
        return Response(
            {
                "order": OrderSerializer(order).data,
                "credits": FundsCreditSerializer(order.credits).data
            }, status=status.HTTP_200_OK
        )
