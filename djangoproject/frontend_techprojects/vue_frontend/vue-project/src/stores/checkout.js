import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useCheckoutStore = defineStore('checkout', () => {
    const current_payment = ref({
        'intent': {
            'amount': 0,
        }
    })

    async function submitCheckout(amount_pennies) {
        const response = await fetch('/apiv1/checkout/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'X-CSRFToken': window.csrf_token,
            },
            body: JSON.stringify({ amount_pennies }),
        })
        if (response.ok) {
            const data = await response.json()
            current_payment.value = data
            console.log(current_payment.value)
            return data
        } else {
            console.error('failed to submit checkout')
            console.error(response)
        }
    }

    async function confirmOrderStatus(){
        const response = await fetch('/apiv1/confirm_payment/', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'X-CSRFToken': window.csrf_token,
            }
        })
        if (response.ok) {
            const data = await response.json()
            console.log(data)
            return data
        } else {
            console.error('failed to confirm payment')
            console.error(response)
        }
    }

    return { submitCheckout, confirmOrderStatus, current_payment }
})
