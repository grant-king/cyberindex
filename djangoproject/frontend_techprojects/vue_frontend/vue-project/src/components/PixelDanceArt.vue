<template>
    <div class="flex flex-col align-center gap-1 bg-white/10">
        <div class="relative m-auto border-2 bg-black/95"
            :style="{ width: `${stage_width}px`, height: `${stage_height}px` }" @click="play_pixel_dance">
            <div v-for="pixeldance in pixeldance_store.pixeldance_list" :key="pixeldance.id"
                class="absolute w-4 h-4 opacity-80 rounded-full"
                :style="{ left: `${pixeldance.x}px`, top: `${pixeldance.y}px`, backgroundColor: pixeldance.color}">

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

function play_pixel_dance() {
    //set stage height and width to device width
    stage_width.value = Math.min(window.innerHeight, window.innerWidth)
    stage_height.value = Math.min(window.innerHeight, window.innerWidth)
    
    if (pixeldance_store.pixeldance_list.length == 0) {
        console.log('No pixel dance data')
        return
    }

    pixeldance_store.animate_all_dances()
}

</script>