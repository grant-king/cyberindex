import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useCheckoutStore = defineStore('checkout', () => {
    const current_payment_default = {
        'intent': {
            'amount': 0,
        }
    }
    const current_payment = ref(current_payment_default)
    const show_pay_button = ref(false)
    const show_shop = ref(true)
    const credit_balance = ref(0)
    const customer_endpoint = ref('')
    const customer_user = ref(0)

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
            show_pay_button.value = true
            return data
        } else {
            console.error('failed to submit checkout')
            console.error(response)
        }
    }

    async function confirmOrderStatus(){
        show_pay_button.value = false
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

    async function getCreditBalance(){
        const response = await fetch('/apiv1/customers/', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'X-CSRFToken': window.csrf_token,
            }
        })
        if (response.ok) {
            const data = await response.json()
            console.log(data)
            credit_balance.value = data.results[0].credit_balance
            customer_endpoint.value = data.results[0].url
            customer_user.value = data.results[0].user
            if (credit_balance.value > 3800){
                show_shop.value = false
            }
            return data
        } else {
            console.error('failed to get credit balance')
            console.error(response)
        }
    }

    return { submitCheckout, confirmOrderStatus, getCreditBalance, current_payment, show_pay_button, show_shop, credit_balance, customer_endpoint, customer_user }
})
