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

function play_pixel_dance() {
    if (pixeldance_store.pixeldance_list.length == 0) {
        console.log('No pixel dance data')
        return
    }

    pixeldance_store.animate_all_dances()
}

</script>