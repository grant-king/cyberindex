from rest_framework import serializers
from cashier.models import StripePayment, Customer, Order, FundsCredit, FundsDebit


class CustomerSerializer(serializers.ModelSerializer):

    class Meta:
        model = Customer
        fields = ["user"]


class StripePaymentSerializer(serializers.ModelSerializer):

    class Meta:
        model = StripePayment
        fields = ["intent", "customer", "amount_pennies", "created_at", "session_key"]


class OrderSerializer(serializers.ModelSerializer):

    class Meta:
        model = Order
        fields = ["payment", "customer", "completed_at"]


class FundsCreditSerializer(serializers.ModelSerializer):

    class Meta:
        model = FundsCredit
        fields = ["customer", "created_at", "amount_pennies"]


class FundsDebitSerializer(serializers.ModelSerializer):

    class Meta:
        model = FundsDebit
        fields = ["customer", "created_at", "amount_pennies"]
        