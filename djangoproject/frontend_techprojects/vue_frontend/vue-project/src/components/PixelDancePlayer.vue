<template>
    <div class="flex flex-col align-center gap-1 bg-white/10">
        <div class="relative m-auto border-2 bg-white/10"
            :style="{ width: `${stage_width}px`, height: `${stage_height}px` }" @click="play_pixel_dance">
            <div v-for="pixeldance in pixeldance_store.pixeldance_list" :key="pixeldance.id"
                class="absolute w-2 h-2 bg-white"
                :style="{ left: `${pixeldance.x}px`, top: `${pixeldance.y}px`, backgroundColor: pixeldance.color }">

            </div>
        </div>
    </div>

</template>

<script setup>
import { ref } from 'vue'
import { usePixeldanceStore } from '@/stores/pixeldance';

const pixeldance_store = usePixeldanceStore()

const stage_width = ref(400)
const stage_height = ref(400)

function animate_step(reference_time, travel_duration, start_x, start_y, delta_x, delta_y, dance_index, animation_x, animation_y) {
    const elapsed_time = (Date.now() - reference_time) / 1000
    console.log('elapsed_time', elapsed_time)
    if (elapsed_time > travel_duration) {
        pixeldance_store.pixeldance_list[dance_index].x = start_x + delta_x
        pixeldance_store.pixeldance_list[dance_index].y = start_y + delta_y
    } else {
        pixeldance_store.pixeldance_list[dance_index].x = start_x + (delta_x * elapsed_time / travel_duration)
        pixeldance_store.pixeldance_list[dance_index].y = start_y + (delta_y * elapsed_time / travel_duration)
        requestAnimationFrame(() => {
            animate_step(reference_time, travel_duration, start_x, start_y, delta_x, delta_y, dance_index, animation_x, animation_y)
        })
    }
    console.log('animation_x', animation_x)
    console.log('store x', pixeldance_store.pixeldance_list[0].x)
    console.log('animation_y', animation_y)

}

function play_pixel_dance() {
    if (pixeldance_store.pixeldance_list.length == 0) {
        console.log('No pixel dance data')
        return
    }

    let start_time = Date.now()
    const travel_duration = 2

    //for (let pixeldance of pixeldance_store.pixeldance_list) {
    let dance_index = 0
    for (let next_dance_step of pixeldance_store.pixeldance_list[0].steps) {
        requestAnimationFrame(() => {
            animate_step(
                start_time,
                travel_duration,
                next_dance_step.start_x,
                next_dance_step.start_y,
                next_dance_step.delta_x,
                next_dance_step.delta_y,
                dance_index,
                pixeldance_store.pixeldance_list[0].x,
                pixeldance_store.pixeldance_list[0].y
            )
        })
    }
}
//}

</script>