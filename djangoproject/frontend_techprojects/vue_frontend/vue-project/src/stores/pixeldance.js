import { defineStore } from 'pinia'

export const usePixeldanceStore = defineStore('pixeldance', () => {
    const pixeldance_list = ref([])

    return {
        pixeldance_list,
    }
})
