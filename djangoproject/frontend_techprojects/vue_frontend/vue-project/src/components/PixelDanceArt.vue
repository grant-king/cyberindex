<template>
    <div class="">
        <div class="p-8 font-mono text-3xl font-bold">
            Pixeldance :: Community Art
        </div>
        <div class="flex mx-auto align-center justify-center overflow-hidden">
            <div class="border-4 border-dotted">
                <div class="relative bg-black"
                    :style="{ width: `${stage_width}px`, height: `${stage_height}px` }" @click="play_pixel_dance">
                    <div v-for="pixeldance in pixeldance_store.pixeldance_list" :key="pixeldance.id"
                        class="absolute w-4 h-4 opacity-80 rounded-full"
                        :style="{ left: `${pixeldance.x * (stage_width / 400)}px`, top: `${pixeldance.y * (stage_width / 400)}px`, backgroundColor: pixeldance.color }">
                    </div>
                </div>
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

async function play_pixel_dance() {
    //set stage height and width to device width
    stage_width.value = Math.min(window.innerHeight, window.innerWidth)
    stage_height.value = Math.min(window.innerHeight, window.innerWidth)

    await pixeldance_store.load_communal_dances_page()
    pixeldance_store.animate_all_dances()
}

</script>