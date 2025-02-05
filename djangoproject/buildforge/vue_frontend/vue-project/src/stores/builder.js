import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useBuilderStore = defineStore('builder', () => {
  const base_url = window.location.origin
  const placement_endpoint = `${base_url}/apiv1/placements/`
  const placement_next_page = ref(`${placement_endpoint}?page=1`)
  const builder_endpoint = `${base_url}/apiv1/builders/`
  const builder_next_page = ref(`${builder_endpoint}?page=1`)
  const my_builder_endpoint = `${builder_endpoint}my_builder/`
  
  const placement_list = ref([])
  const my_builder = ref({
    session_id: 0,
    x: 0,
    y: 0,
    z: 0,
    edit_plane: 'xy',
  })

  async function fetchMyBuilder() {
    const response = await fetch(my_builder_endpoint, {
      method: 'GET',
      headers: {
        'X-CSRFToken': window.csrf_token,
      },
    })
    const data = await response.json()
    if (response.ok) {
      console.log('my builder', data)
      my_builder.value = data
    } else {
      console.error('failed to fetch my builder')
      console.error(response)
    }
  }

  async function updateBuilder() {
    const form_data = new FormData()
    form_data.append('x', my_builder.value.x)
    form_data.append('y', my_builder.value.y)
    form_data.append('z', my_builder.value.z)
    form_data.append('edit_plane', my_builder.value.edit_plane)
    const response = await fetch(my_builder_endpoint, {
      method: 'PUT',
      headers: {
        'X-CSRFToken': window.csrf_token,
      },
      body: form_data,
    })
    const data = await response.json()
    if (response.ok) {
      console.log('updated builder', data)
      my_builder.value = data
    } else {
      console.error('failed to update builder')
      console.error(response)
    }
  }

  return { fetchMyBuilder, my_builder, updateBuilder }
})
