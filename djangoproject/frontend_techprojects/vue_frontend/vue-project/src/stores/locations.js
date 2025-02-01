import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useLocationsStore = defineStore('locations', () => {
  const base_url = window.location.origin
  const endpoint = `${base_url}/apiv1/locations/`
  const next_page = ref(`${endpoint}?page=1`)
  const location_list = ref([])
  const total_locations = ref(0)
  const new_selected_location = ref(null)
  const new_location_template = {
    city: 'Tacoma',
    state: 'Washington',
    country: 'United States',
  }
  const new_location_preview = ref(structuredClone(new_location_template))
  async function fetchLocations() {
    if (next_page.value === null) {
      console.log('no more pages to fetch')
      return
    }
    console.log('fetching next page of locations')
    const response = await fetch(next_page.value, {
      method: 'GET',
      headers: {
        'X-CSRFToken': window.csrf_token,
      }
    })
    if (response.ok) {
      const data = await response.json()
      total_locations.value = data.count
      console.log('total locations:', total_locations.value)
      location_list.value.push(...data.results)
      next_page.value = data.next
    }
  }


  return { fetchLocations, new_location_preview, location_list, total_locations }
})
