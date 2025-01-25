from django.db import models
from django.contrib.auth.models import User


class Customer(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)


class StripePayment(models.Model):
    intent = models.JSONField()
    customer = models.ForeignKey(
        Customer, on_delete=models.CASCADE, related_name="payments"
    )
    amount_pennies = models.PositiveIntegerField()
    created_at = models.DateTimeField(auto_now_add=True)
    session_key = models.CharField(max_length=40)


class Order(models.Model):
    payment = models.OneToOneField(StripePayment, on_delete=models.CASCADE)
    customer = models.ForeignKey(Customer, on_delete=models.CASCADE)
    completed_at = models.DateTimeField(blank=True, null=True)


class FundsCredit(models.Model):
    customer = models.ForeignKey(
        Customer, on_delete=models.CASCADE, related_name="credits"
    )
    created_at = models.DateTimeField(auto_now_add=True)
    amount_pennies = models.PositiveIntegerField()


class FundsDebit(models.Model):
    customer = models.ForeignKey(
        Customer, on_delete=models.CASCADE, related_name="credits"
    )
    created_at = models.DateTimeField(auto_now_add=True)
    amount_pennies = models.PositiveIntegerField()
