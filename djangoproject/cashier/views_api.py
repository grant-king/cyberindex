from rest_framework import viewsets, status
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.decorators import action
from cashier.models import StripePayment, Customer
from cashier.serializers import (
    StripePaymentSerializer,
    CustomerSerializer,
    OrderSerializer,
    FundsCreditSerializer,
    FundsDebitSerializer,
)
from stripe_tools import create_payment_intent, update_payment_intent


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
        ).first()
        if payment:
            intent_id = payment.intent["id"]
            # update the payment intent with the new amount
            intent = update_payment_intent(intent_id, request.data["amount_pennies"])
            if intent:
                payment.intent = intent
        else:
            intent = create_payment_intent(request.data["amount_pennies"])
            payment = StripePayment.objects.create(
                intent=intent,
                customer=customer,
                amount_pennies=request.data["amount_pennies"],
                session_key=request.session.session_key,
            )
        payment.save()
        return Response(
            StripePaymentSerializer(payment).data, status=status.HTTP_201_CREATED
        )
