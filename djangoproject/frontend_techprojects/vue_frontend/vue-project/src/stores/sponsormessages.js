import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useSponsormessagesStore = defineStore('sponsormessages', () => {
    const base_url = window.location.origin
    const endpoint = `${base_url}/apiv1/sponsormessages/`
    const next_page = ref(`${endpoint}?page=1`)
    const message_list = ref([])
    const total_messages = ref(0)
    const new_message_template = {
        message: 'They said, "Dance like this so we can find you, spin and twist until you fly". And so he started to dance and twist, just like this. He started to dance and spin. They found him well; together, they danced a spell. In a moment while spinning, he began to fly.',
    }
    const new_message_preview = ref(structuredClone(new_message_template))

    // computed property 
    const xx = computed(() => {

    })

    async function toggleMessageArchiveStatus(message) {
        const store_message = message_list.value.find(m => m.url === message.url)
        if (store_message.archived) {
            console.log('unarchiving message')
            setMessageArchiveStatus(message.url, false)
        }
        else {
            console.log('archiving message')
            setMessageArchiveStatus(message.url, true)
        }
    }

    async function setMessageArchiveStatus(message_url, status) {
        const response = await fetch(message_url, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
                'X-CSRFToken': window.csrf_token,
            },
            body: JSON.stringify({ archived: status }),
        })
        if (response.ok) {
            console.log('Message archived successfully')
            const updated_message = await response.json()
            const index = message_list.value.findIndex(m => m.url === message_url)
            message_list.value[index] = updated_message
        }
        else {
            console.error('Failed to archive message')
            console.error(response)
        }
    }


    function get_random_message() {
        if (message_list.value.length === 0) {
            return new_message_preview.value
        }
        const random_index = Math.floor(Math.random() * message_list.value.length)
        return message_list.value[random_index]
    }

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
            }
        })
        if (response.ok) {
            const data = await response.json()
            total_messages.value = data.count
            console.log('total messages:', total_messages.value)
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
            message_list.value.unshift(new_message)
            console.log('Message created successfully')
        }
        else {
            console.error('Failed to create message')
            console.error(response)
        }
    }

    return {
        fetchSponsormessages, createSponsorMessage, get_random_message, toggleMessageArchiveStatus,
        message_list, new_message_preview, total_messages, next_page
    }
})