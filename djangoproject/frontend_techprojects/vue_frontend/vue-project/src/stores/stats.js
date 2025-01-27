import { ref, computed, watch } from 'vue'
import { defineStore } from 'pinia'
import { useSponsormessagesStore } from './sponsormessages'
import { useCheckoutStore } from './checkout'

export const useStatsStore = defineStore('stats', () => {
    const messages_store = useSponsormessagesStore()
    //const checkout_store = useCheckoutStore()

    const base_url = window.location.origin
    const credit_balance = ref(0)
    const customer_endpoint = ref(`${base_url}/apiv1/customer/`)
    const stats_endpoint = ref(`${base_url}/apiv1/stats/`)
    const auth_user = ref(0)
    const sponsor_messages = ref([])
    const stats_groups = ref([])
    const my_meditations = ref(0)
    const my_reflections = ref(0)
    const platform_meditations = ref(0)
    const platform_reflections = ref(0)
    const stats_data = ref({})

    const stats1 = ref([
        { id: 0, name: 'meditations on the platform', value: platform_meditations.value },
        { id: 1, name: 'authored by you', value: my_meditations.value },
        { id: 2, name: 'platform reflections', value:  platform_reflections.value },
        { id: 3, name: 'your reflections', value: my_reflections.value },
      ])

      // stats idea: total time on screen for read messages, maxes out at 100 seconds
      // calculate on backend using subsequent message read requests per session

      stats_groups.value.push(stats1.value)
      
      const message_count = computed(() => {
          return messages_store.total_messages
    })

    watch(() => stats_data.value, (newVal, oldVal) => {
        console.log('stats fetched:', newVal)
        stats1.value = [
            { id: 0, name: 'meditations on the platform', value: platform_meditations.value },
            { id: 1, name: 'published by you', value: my_meditations.value },
            { id: 2, name: 'platform reflections', value:  platform_reflections.value },
            { id: 3, name: 'your reflections', value: my_reflections.value },
          ]
        stats_groups.value = [stats1.value]
    })

    async function fetchStats() {
        const response = await fetch(stats_endpoint.value, {
            method: 'GET',
            headers: {
                'X-CSRFToken': window.csrf_token,
            }
        })
        if (response.ok) {
            const data = await response.json()
            console.log('stats data:', data)
            stats_data.value = data
            my_meditations.value = data.my_meditations
            my_reflections.value = data.my_reflections
            platform_meditations.value = data.platform_meditations
            platform_reflections.value = data.platform_reflections
        }
    }

    return { fetchStats, credit_balance, message_count, auth_user, stats_groups }
})
