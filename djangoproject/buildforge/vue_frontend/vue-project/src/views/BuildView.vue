<template>
    <!-- Plane Painter -->
    <div class="border-16 border-dotted"
    :style="{ borderColor: `#${current_color}` }">
        <div class="bg-black overflow-auto max-w-4xl mx-auto p-4">
            <div class="grid grid-cols-8 gap-4">
                <div v-for="slot in grid_slots" :key="slot" class="column">
                    <div class="text-white text-xs aspect-square w-auto border border-white/50"
                    :style="{ backgroundColor: `#${slot_colors[slot]}` }"
                    @click="paintSlot(slot)">
                        {{ slot }}
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- Paint Stack -->
    <div class="mx-auto">
        <div class="flex-wrap flex p-4">
            <div class="p-1"
            v-for="claim in collector_store.claim_list" :key="claim.voxel.pk">
                <div :style="{ backgroundColor: `#${claim.voxel.color}` }" class="aspect-square w-auto border border-black">
                    <div class="w-4 h-4">
                    </div>
                </div>

            </div>
        </div>
    </div>

</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useCollectorStore } from '@/stores/collector';

const collector_store = useCollectorStore()
collector_store.fetchClaims()

const current_color = ref('001100')
const next_color_idx = ref(0)

//async onmounted
onMounted(async () => {
    await collector_store.fetchClaims()
    advanceCurrentColor()
})

const grid_slots = ref(Array.from({ length: 64 }, (_, idx) => idx))
const slot_colors = ref(Array.from({ length: 64 }, (_, idx) => '000200'))

function paintSlot(slot) {
    slot_colors.value[slot] = current_color.value
    advanceCurrentColor()
}

function advanceCurrentColor(){
    current_color.value = collector_store.claim_list[next_color_idx.value].voxel.color
    next_color_idx.value = (next_color_idx.value + 1) % collector_store.claim_list.length
}
</script>