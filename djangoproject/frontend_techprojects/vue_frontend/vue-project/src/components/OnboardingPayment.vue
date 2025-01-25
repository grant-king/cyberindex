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
                    <button class="uppercase mt-8" @click="submit_payment" type="button">
                        <div
                            class="px-4 py-2 border-4 hover:bg-clip-border hover:bg-lime-200 hover:bg-white/20 hover:text-white/50 transition-all duration-1000 border-white/50 border-dotted rounded-lg">
                            <div
                                class="transition-all duration-1000 text-white/20 hover:text-black/80 hover:bg-lime-400 bg-lime-200 bg-clip-text font-extrabold">
                                <div class="font-mono text-4xl">
                                    Pay
                                    ${{ store.current_payment.intent.amount / 100 }}
                                    {{ store.current_payment.intent.currency }}
                                </div>
                            </div>
                        </div>
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
const stripe_elements = ref(null)

async function submit_payment() {
    // submit payment logic here
    const confirmed_intent = await stripe.value.confirmPayment(
        {
            elements: stripe_elements.value,
            redirect: 'if_required',
        }
    )
    if (confirmed_intent.error) {
        console.error('payment error', confirmed_intent.error)
        return
    }
    store.current_payment.intent = confirmed_intent
    console.log('payment confirmed', confirmed_intent)
    // trigger confirm and update order, payment with stored intent id on the back end
}

async function update_stripe_elements() {
    const appearance = {
        theme: 'flat',
    }
    const options = {
        layout: {
            type: 'accordion',
            defaultCollapsed: false,
            radios: false,
            spacedAccordionItems: true,
        }
    }
    const public_key = store.current_payment.intent.public_key
    const client_key = store.current_payment.intent.client_secret
    stripe.value = await loadStripe(public_key)
    stripe_elements.value = stripe.value.elements({
        appearance,
        clientSecret: client_key,
    })
    const payment_element = stripe_elements.value.create('payment', options)
    payment_element.mount('#payment-element')
    const link_auth_element = stripe_elements.value.create('linkAuthentication')
    link_auth_element.mount('#link-authentication-element')
}

// watch for changes to the current payment intent, and update stripe elements
watch(() => store.current_payment, async (newval, oldval) => {
    await update_stripe_elements()
})
</script>