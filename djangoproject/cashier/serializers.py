from rest_framework import serializers
from cashier.models import StripePayment, Customer


class CustomerSerializer(serializers.ModelSerializer):

    class Meta:
        model = Customer
        fields = ["user"]


class StripePaymentSerializer(serializers.ModelSerializer):

    class Meta:
        model = StripePayment
        fields = ["intent", "customer", "amount_pennies", "created_at", "session_key"]
