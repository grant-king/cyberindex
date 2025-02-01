import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useAvatarStatsStore = defineStore('avatarstats', () => {
  const base_url = window.location.origin
  const base_endpoint = `${base_url}/apiv1/avatars/`
  const session_stats_endpoint = `${base_endpoint}session_stats/`
  const linked_stats_endpoint = `${base_endpoint}linked_stats/`
  const session_stats = ref({})
  const linked_stats = ref({})

  async function fetchSessionStats() {
    const response = await fetch(session_stats_endpoint, {
      method: 'GET',
      headers: {
        'X-CSRFToken': window.csrf_token,
      },
    })
    const data = await response.json()
    if (response.ok) {
      session_stats.value = data
    } else {
      console.error('failed to fetch session stats')
      console.error(response)
    }
  }

  async function fetchLinkedStats() {
    const response = await fetch(linked_stats_endpoint, {
      method: 'GET',
      headers: {
        'X-CSRFToken': window.csrf_token,
      },
    })
    const data = await response.json()
    if (response.ok) {
      linked_stats.value = data
    } else {
      console.error('failed to fetch linked stats')
      console.error(response)
    }
  }
  

  return { session_stats, linked_stats, fetchSessionStats, fetchLinkedStats }
})
