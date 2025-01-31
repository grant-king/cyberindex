import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useAvatarStatsStore = defineStore('avatarstats', () => {
  const base_url = window.location.origin
  const base_endpoint = `${base_url}/apiv1/avatars/`
  const session_stats_endpoint = `${base_endpoint}session_stats/`
  const linked_stats_endpoint = `${base_endpoint}linked_stats/`
  const all_images_endpoint = `${base_endpoint}all_images/`
  const session_stats = ref({})
  const linked_stats = ref({})
  const all_images = ref([])

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

  async function fetchAllImages() {
    const response = await fetch(all_images_endpoint, {
      method: 'GET',
      headers: {
        'X-CSRFToken': window.csrf_token,
      },
    })
    const data = await response.json()
    if (response.ok) {
      console.log('all images', data)
      all_images.value = data.public_images
    } else {
      console.error('failed to fetch all images')
      console.error(response)
    }
  } 
  

  return { session_stats, linked_stats, fetchSessionStats, fetchLinkedStats, all_images, fetchAllImages }
})
