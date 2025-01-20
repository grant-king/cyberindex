import { defineStore } from 'pinia'
import { ref } from 'vue'

export const usePixeldanceStore = defineStore('pixeldance', () => {
    const pixeldance_list = ref([])

    return {
        pixeldance_list,
    }
})
