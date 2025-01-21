import { defineStore } from 'pinia'
import { ref } from 'vue'

export const usePixeldanceStore = defineStore('pixeldance', () => {
    const pixeldance_list = ref([])

    function store_pixel_dance(dance_paths, color) {
        const dance = {}
        dance.idx = pixeldance_list.value.length
        dance.color = color
        dance.x = dance_paths[0].start_x
        dance.y = dance_paths[0].start_y
        dance.current_path = 0
        dance.start_timestamp = null
        dance.total_paths = dance_paths.length
        dance.paths = dance_paths

        pixeldance_list.value.push(dance)
        console.log(pixeldance_list.value)
    }

    function step(timestamp, dance) {
        if (!dance.start_timestamp) {
            dance.start_timestamp = timestamp
        }
        const elapsed_time = timestamp - dance.start_timestamp
        
        const shift_x = (dance.paths[dance.current_path].delta_x / 2000 ) * elapsed_time
        const shift_y = (dance.paths[dance.current_path].delta_y / 2000 ) * elapsed_time

        dance.x = dance.paths[dance.current_path].start_x + shift_x
        dance.y = dance.paths[dance.current_path].start_y + shift_y

        //if (elapsed_time < 2000) {
        if (elapsed_time < dance.paths[dance.current_path].click_tick) {
            window.requestAnimationFrame((timestamp) => step(timestamp, dance))
        }
    }

    function animate_next_path(dance) {
        const zero = document.timeline.currentTime
        window.requestAnimationFrame((timestamp) => step(zero, dance))
        dance.current_path += 1
        dance.start_timestamp = null
        if (dance.current_path == dance.total_paths) {
            dance.current_path = 0
        }
    }

    function animate_each_path(dance) {

    }

    function animate_dance(dance_idx) {
        const dance = pixeldance_list.value[dance_idx]
        animate_next_path(dance)
    }

    return {
        pixeldance_list, store_pixel_dance, animate_dance
    }
})
