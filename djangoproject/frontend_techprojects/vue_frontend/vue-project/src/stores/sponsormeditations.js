import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useMeditationsStore = defineStore('meditations', () => {
    const base_url = window.location.origin
    const endpoint = `${base_url}/apiv1/meditation/`
    const meditation_template = {
        message: 'They said, "Dance like this so we can find you, spin and twist until you fly". And so he started to dance and twist, just like this. He started to dance and spin. They found him well; together, they danced a spell. In a moment while spinning, he began to fly.',
        rep_name: 'Grant King',
        rep_role: 'Spinning',
        rep_image_url: 'https://unrolla.blob.core.windows.net/unrolla/images/PXL_20231023_004949758_4679usk.webp',
        company_name: 'Alignment',
        company_logo_url: 'https://unrolla.blob.core.windows.net/unrolla/images/IT20_pumpkin_logo_D9SHwmg.webp',
        company_website: 'https://2it0.com/',
    }
    const meditation_list = ref([])
    meditation_list.value.push(meditation_template)
    const current_preview_index = ref(0)

    const current_preview = computed(() => {
        return meditation_list.value[current_preview_index.value]
    })

    async function readMeditation() {
        await fetchMeditation()
        console.log(meditation_list.value)
        current_preview_index.value = meditation_list.value.length - 1
        console.log(current_preview_index.value)
    }

    function rewindMeditation(){
        if (current_preview_index.value > 0) {
            current_preview_index.value -= 1
        }
    }

    async function fetchMeditation() {
        console.log('fetching random meditation')
        const response = await fetch(endpoint, {
            method: 'GET',
            headers: {
                'X-CSRFToken': window.csrf_token,
            }
        })
        if (response.ok) {
            const data = await response.json()
            meditation_list.value.push(data)
        }
        else {
            console.error('failed to fetch meditation')
            console.error(response)
        }
    }

    return { fetchMeditation, readMeditation, rewindMeditation, meditation_list, current_preview, current_preview_index }
})