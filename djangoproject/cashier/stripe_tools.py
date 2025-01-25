import stripe
import os
from dotenv import load_dotenv

load_dotenv()
stripe.api_key = os.environ.get("STRIPE_API_KEY")


def create_payment_intent(amount_pennies):
    if amount_pennies < 50 or amount_pennies > 50000:
        print("invalid amount")
        return 0
    try:
        intent = stripe.PaymentIntent.create(amount=amount_pennies, currency="usd")
        print(f"created payment intent {intent}")
        return intent
    except Exception as e:
        print(f"error creating payment intent: {e}")
        return 0


def update_payment_intent(intent_id, amount_pennies):
    if amount_pennies < 50 or amount_pennies > 50000:
        print("invalid amount")
        return 0
    try:
        intent = stripe.PaymentIntent.modify(intent_id, amount=amount_pennies)
        print(f"updated payment intent {intent}")
        return intent
    except Exception as e:
        print(f"error updating payment intent: {e}")
        return 0
