import { ref, computed, watch } from 'vue'
import { defineStore } from 'pinia'
import { useSponsormessagesStore } from './sponsormessages'
import { useCheckoutStore } from './checkout'

export const useStatsStore = defineStore('stats', () => {
    const messages_store = useSponsormessagesStore()
    //const checkout_store = useCheckoutStore()

    const credit_balance = ref(0)
    const customer_endpoint = ref('')
    const auth_user = ref(0)
    const sponsor_messages = ref([])
    const stats_groups = ref([])

    const stats1 = ref([
        { id: 0, name: 'meditations on the platform', value: '12,456' },
        { id: 1, name: 'meditation delivery fee', value: '10 credits' },
        { id: 2, name: 'authored by you', value:  messages_store.total_messages},
        { id: 3, name: 'your all-time reads', value: '2280' },
      ])

      // stats idea: total time on screen for read messages, maxes out at 100 seconds
      // calculate on backend using subsequent message read requests per session

      stats_groups.value.push(stats1.value)
      
      const message_count = computed(() => {
          return messages_store.total_messages
    })

    watch(() => messages_store.total_messages, (newVal, oldVal) => {
        console.log('total_messages changed:', newVal)
        stats1.value[2].value = newVal
    })

    return { credit_balance, message_count, auth_user, stats_groups }
})
