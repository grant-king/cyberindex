import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useSponsorsStore = defineStore('sponsors', () => {
  const base_url = window.location.origin
  const endpoint = `${base_url}/apiv1/sponsorprofiles/`
  const next_page = ref(`${endpoint}?page=1`)
  const sponsor_list = ref([])
  const new_object_template = {
    rep_name: 'Grant King',
    rep_role: 'Product Manager',
    rep_image_url: 'https://unrolla.blob.core.windows.net/unrolla/images/PXL_20231023_004949758_4679usk.webp', 
    organization_name: 'IT20',
    organization_url: 'https://2it0.com',
    logo_source: 'https://unrolla.blob.core.windows.net/unrolla/images/IT20_pumpkin_logo_D9SHwmg.webp',
    message: 'As part of a company that is averse to traditional marketing methods and muddy monetization models, I find quiet, transparent support of aligned projects to be the most rewarding.'

  }
  const new_object_preview = ref(structuredClone(new_object_template))
  const show_preview = ref(false)
  
  async function fetchSponsors() {
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

  async function submitNewSponsor() {
    // check if the new_object_preview is valid
    if (!new_object_preview.value.name) {
      console.error('Invalid sponsor submission')
      return
    }
    // make a POST request to the endpoint with the new_object_preview
    const response = await fetch(endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-CSRFToken': window.csrf_token,
      },
      body: JSON.stringify(new_object_preview.value),
    })
    if (response.ok) {
      console.log('Sponsor submitted successfully')
      // save the response sponsor to the sponsor_list
      const new_sponsor = await response.json()
      sponsor_list.value.push(new_sponsor)
      // reset the new_object_preview
      new_object_preview.value = structuredClone(new_object_template)
      show_preview.value = false
    } else {
      console.error('Failed to submit sponsor')
    }
  }

  return { fetchSponsors, submitNewSponsor, sponsor_list, new_object_preview, show_preview }
})
