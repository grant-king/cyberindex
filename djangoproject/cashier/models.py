from django.db import models
from django.contrib.auth.models import User
from django.utils import timezone

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

    def update_amount(self):
        # update the self.amount_pennies from the StripePayment intent object 'amount'
        if self.amount_pennies != self.intent["amount"]:
            self.amount_pennies = self.intent["amount"]
            self.save()


class Order(models.Model):
    payment = models.OneToOneField(
        StripePayment, on_delete=models.CASCADE, related_name="order"
    )
    customer = models.ForeignKey(Customer, on_delete=models.CASCADE)
    completed_at = models.DateTimeField(blank=True, null=True)
    cancelled_at = models.DateTimeField(blank=True, null=True)

    def confirm_status(self):
        if not self.completed_at and not self.cancelled_at:
            self.update_status()

    def update_status(self):
        if self.payment.intent["status"] == "succeeded":
            self.completed_at = timezone.now()
            self.save()
            self.add_funds()
        if self.payment.intent["status"] == "cancelled":
            self.cancelled_at = timezone.now()
            self.save()

    def add_funds(self):
        if self.completed_at:
            FundsCredit.objects.create(
                customer=self.customer,
                amount_pennies=self.payment.intent["amount_received"],
                order=self,
            )


class FundsCredit(models.Model):
    customer = models.ForeignKey(
        Customer, on_delete=models.CASCADE, related_name="credits"
    )
    created_at = models.DateTimeField(auto_now_add=True)
    amount_pennies = models.PositiveIntegerField()
    order = models.OneToOneField(
        Order, blank=True, null=True, on_delete=models.CASCADE, related_name="credits"
    )


class FundsDebit(models.Model):
    customer = models.ForeignKey(
        Customer, on_delete=models.CASCADE, related_name="debits"
    )
    created_at = models.DateTimeField(auto_now_add=True)
    amount_pennies = models.PositiveIntegerField()
