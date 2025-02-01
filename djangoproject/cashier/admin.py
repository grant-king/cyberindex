from django.contrib import admin
from .models import Customer, Order, StripePayment, FundsCredit, FundsDebit

admin.site.register(Customer)
admin.site.register(Order)
admin.site.register(StripePayment)
admin.site.register(FundsCredit)
admin.site.register(FundsDebit)
