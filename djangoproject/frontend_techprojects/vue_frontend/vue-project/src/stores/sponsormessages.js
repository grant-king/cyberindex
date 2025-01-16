import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useSponsormessagesStore = defineStore('sponsormessages', () => {
    const base_url = window.location.origin
    const endpoint = `${base_url}/apiv1/sponsormessages/`
    const next_page = ref(`${endpoint}?page=1`)
    const message_list = ref([])
    const new_message_template = {
        message: 'They said, "Dance like this so we can find you, spin and twist until you fly". And so he started to dance and twist, just like this. He started to dance and spin. They found him well; together, they danced a spell. In a moment while spinning, he began to fly.',
    }
    const new_message_preview = ref(structuredClone(new_message_template))

    async function fetchSponsormessages() {
        if (next_page.value === null) {
            console.log('no more pages to fetch')
            return
        }
        console.log('fetching next page of messages')
        const response = await fetch(next_page.value, {
            method: 'GET',
            headers: {
                'X-CSRFToken': window.csrf_token,
            },
            body: JSON.stringify(new_message_preview.value),
        })
        if (response.ok) {
            const data = await response.json()
            message_list.value.push(...data.results)
            next_page.value = data.next
        }
    }
    
    async function createSponsorMessage() {
        // POST to endpoint with new_message_preview
        const response = await fetch(endpoint, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'X-CSRFToken': window.csrf_token,
            },
            body: JSON.stringify(new_message_preview.value),
        })
        if (response.ok) {
            // save the response message to the message_list
            const new_message = await response.json()
            message_list.value.push(new_message)
            console.log('Message created successfully')
        }
        else {
            console.error('Failed to create message')
            console.error(response)
        }
    }
    
    return { fetchSponsormessages, createSponsorMessage, message_list, new_message_preview }    
})