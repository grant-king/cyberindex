from rest_framework import serializers
from cashier.models import StripePayment, Customer
from rest_framework.permissions import IsAuthenticated


class CustomerSerializer(serializers.ModelSerializer):
    permission_classes = [IsAuthenticated]

    class Meta:
        model = Customer
        fields = ["user"]


class StripePaymentSerializer(serializers.ModelSerializer):
    permission_classes = [IsAuthenticated]

    class Meta:
        model = StripePayment
        fields = ["intent", "customer", "amount_pennies", "created_at", "session_key"]
