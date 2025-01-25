<template>
    <div>
        <div>
            <form id="payment-form">
                <div id="link-authentication-element">
                    <!-- link payment service element will be inserted here -->
                </div>
                <div id="payment-element">
                    <!-- main stripe payment element will be inserted here -->
                </div>
                <div>
                    <button id="submit-button" class="btn btn-primary"
                    @click="submit_payment">
                        Submit Payment
                    </button>
                </div>
            </form>
        </div>
    </div>
</template>

<script setup>
import { ref, watch } from 'vue'
import { loadStripe } from '@stripe/stripe-js'
import { useCheckoutStore } from '@/stores/checkout'

const store = useCheckoutStore()

const stripe = ref(null)
const elements = ref(null)

function submit_payment() {
    // submit payment logic here
    alert('Payment submitted')
}

async function update_stripe_elements() {
    const public_key = store.current_payment.intent.public_key
    console.log('public_key', public_key)
}

// watch for changes to the current payment intent, and update stripe elements
watch(() => store.current_payment, async (newval, oldval) => {
    //console.log('current_payment changed', oldval, newval)
    await update_stripe_elements()
})
</script>