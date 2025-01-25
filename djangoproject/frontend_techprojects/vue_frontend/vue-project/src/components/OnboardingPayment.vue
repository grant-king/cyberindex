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
                    <button class="uppercase mt-8" @click="submit_payment">
                        <div
                            class="px-4 py-2 border-4 hover:bg-clip-border hover:bg-lime-200 hover:bg-white/20 hover:text-white/50 transition-all duration-1000 border-white/50 border-dotted rounded-lg">
                            <div
                                class="transition-all duration-1000 text-white/20 hover:text-black/80 hover:bg-lime-400 bg-lime-200 bg-clip-text font-extrabold">
                                <div class="font-mono text-4xl">
                                    Pay ${{ store.current_payment.intent.amount / 100 }} {{
                                        store.current_payment.intent.currency }}
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
const elements = ref(null)

function submit_payment() {
    // submit payment logic here
    alert('Payment submitted')
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
    elements.value = stripe.value.elements({
        appearance,
        clientSecret: client_key,
    })
    const payment_element = elements.value.create('payment', options)
    payment_element.mount('#payment-element')
    const link_auth_element = elements.value.create('linkAuthentication')
    link_auth_element.mount('#link-authentication-element')
}

// watch for changes to the current payment intent, and update stripe elements
watch(() => store.current_payment, async (newval, oldval) => {
    await update_stripe_elements()
})
</script>