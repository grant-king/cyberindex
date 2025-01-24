import stripe
import os
from dotenv import load_dotenv

load_dotenv()
stripe.api_key = os.environ.get('STRIPE_API_KEY')

def create_payment_intent(amount_pennies):
    pass
