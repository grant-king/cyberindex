import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useSponsorprofilesStore = defineStore('sponsorprofiles', () => {
  const base_url = window.location.origin
  const endpoint = `${base_url}/apiv1/sponsorprofiles/`
  const next_page = ref(`${endpoint}?page=1`)
  const my_profile_read_endpoint = `${endpoint}my_profile/`
  const my_profile_detail_endpoint = ref(null)
  const sponsor_list = ref([])
  const new_object_template = {
    rep_name: 'Grant King',
    rep_role: 'Product Manager',
    rep_image_url: 'https://unrolla.blob.core.windows.net/unrolla/images/PXL_20231023_004949758_4679usk.webp', 
    company_name: 'IT20',
    company_website: 'https://2it0.com/',
    company_logo_url: 'https://unrolla.blob.core.windows.net/unrolla/images/IT20_pumpkin_logo_D9SHwmg.webp',
    message: 'They said, "Dance like this so we can find you, spin and twist until you fly". And so he started to dance and twist, just like this. He started to dance and spin. They found him well; together, they danced a spell. In a moment while spinning, he began to fly.'

  }
  const new_object_preview = ref(structuredClone(new_object_template))
  const show_preview = ref(false)
  const my_profile_data = ref(structuredClone(new_object_template))

  async function fetchMyProfile() {
    const response = await fetch(my_profile_read_endpoint, {
      method: 'GET',
      headers: {
        'X-CSRFToken': window.csrf_token,
      },
    })
    const data = await response.json()
    my_profile_data.value = data
    console.log(data.url)
    console.log(data)
    my_profile_detail_endpoint.value = data.url
    new_object_preview.value = data
  }
  
  async function fetchSponsorprofiles() {
    if (next_page.value === null) {
      console.log('no more pages to fetch')
      return
    }
    console.log('fetching next page of sponsors')
    const response = await fetch(next_page.value, {
      method: 'GET',
      headers: {
        'X-CSRFToken': window.csrf_token,
      },
    })
    const data = await response.json()
    sponsor_list.value.push(...data.results)
    next_page.value = data.next
    
  }

  async function updateSponsorProfile() {
    // make a PUT request to the endpoint with the new_object_preview
    const response = await fetch(my_profile_detail_endpoint.value, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'X-CSRFToken': window.csrf_token,
      },
      body: JSON.stringify(new_object_preview.value),
    })
    if (response.ok) {
      // save the response sponsor to the sponsor_list
      const new_sponsor = await response.json()
      sponsor_list.value.push(new_sponsor)
      console.log('Sponsor profile updated successfully')
    } else {
      console.error('Failed to update sponsor profile')
      console.error(response)
    }
  }

  return { fetchMyProfile, fetchSponsorprofiles, updateSponsorProfile, my_profile_data, sponsor_list, new_object_preview, show_preview }
})
