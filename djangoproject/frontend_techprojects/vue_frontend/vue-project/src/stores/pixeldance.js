import { defineStore } from 'pinia'
import { ref } from 'vue'

export const usePixeldanceStore = defineStore('pixeldance', () => {
    const pixeldance_list = ref([])

    function store_pixel_dance(dance_steps, color) {
        const dance = {}
        dance.id = pixeldance_list.value.length + 1
        dance.color = color
        dance.x = dance_steps[0].start_x
        dance.y = dance_steps[0].start_y
        dance.current_step = 0
        dance.total_steps = dance_steps.length
        dance.steps = dance_steps

        pixeldance_list.value.push(dance)
        console.log(pixeldance_list.value)
    }

    return {
        pixeldance_list, store_pixel_dance
    }
})
