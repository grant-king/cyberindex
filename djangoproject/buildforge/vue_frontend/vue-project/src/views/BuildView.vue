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
    <!-- Builder Navigator -->
    <div></div>
    <div></div>
    <div class="flex flex-wrap justify-center object-center">
        <div class="p-4 text-white">
            <div>set builder origin</div>
            <div class="p-2">
                <label for="x"
                class="mr-2">set x</label>
                <input type="number" id="x" class="bg-white/50 h-8 w-16 rounded-sm"
                v-model="builder_store.my_builder.x"/>
            </div>
            <div class="p-2">
                <label for="y"
                class="mr-2">set y</label>
                <input type="number" id="y" class="bg-white/50 h-8 w-16 rounded-sm"
                v-model="builder_store.my_builder.y"/>
            </div>
            <div class="p-2">
                <label for="z"
                class="mr-2">set z</label>
                <input type="number" id="z" class="bg-white/50 h-8 w-16 rounded-sm"
                v-model="builder_store.my_builder.z"/>
            </div>
        </div>
        <div class="p-4 text-white">
            <div>set build plane</div>
            <div class="p-2 flex objects-center">
                <label for="xy"
                class="mr-2">select xy</label>
                <input type="radio" id="xy" value="xy" name="plane"
                v-model="builder_store.my_builder.edit_plane"
                class="h-8 w-8 rounded-sm"/>
            </div>
            <div class="p-2 flex objects-center">
                <label for="yz"
                class="mr-2">select yz</label>
                <input type="radio" id="yz" value="yz" name="plane"
                v-model="builder_store.my_builder.edit_plane"
                class="h-8 w-8 rounded-sm"/>
            </div>
            <div class="p-2 flex objects-center">
                <label for="zx"
                class="mr-2">select zx</label>
                <input type="radio" id="zx" value="zx" name="plane"
                v-model="builder_store.my_builder.edit_plane"
                class="h-8 w-8 rounded-sm"/>
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
import { useBuilderStore } from '@/stores/builder';
import { useVoxelStore } from '@/stores/voxel';

const collector_store = useCollectorStore()
const builder_store = useBuilderStore()
const voxel_store = useVoxelStore()

const current_color = ref('001100')
const next_color_idx = ref(0)
const current_world_slice_voxels = ref({})
const translated_world_slice_voxels = ref({})

const grid_slots = ref(Array.from({ length: 64 }, (_, idx) => idx))
const slot_colors = ref(Array.from({ length: 64 }, (_, idx) => '000200'))

onMounted(async () => {
    await collector_store.fetchClaims()
    advanceCurrentColor()
    await builder_store.fetchMyBuilder()
    current_world_slice_voxels.value = await voxel_store.fetchVoxelsInSlice(
        builder_store.my_builder.x, 
        builder_store.my_builder.y, 
        builder_store.my_builder.z,
        8,
        builder_store.my_builder.edit_plane)
    const relative_voxels = convertSliceWorldCoordsToRelative2D(current_world_slice_voxels.value)
    console.log('original', current_world_slice_voxels.value)
    console.log('relative', relative_voxels)
    slot_colors.value = mapSliceVoxelsTo1DGrid(relative_voxels)
    

})

function paintSlot(slot) {
    slot_colors.value[slot] = current_color.value
    advanceCurrentColor()
}

function advanceCurrentColor(){
    current_color.value = collector_store.claim_list[next_color_idx.value].voxel.color
    next_color_idx.value = (next_color_idx.value + 1) % collector_store.claim_list.length
}

function convertSliceWorldCoordsToRelative2D(slice_voxels) {
    const relative_voxels = slice_voxels.map(voxel => {
        return {
            x: voxel.x - builder_store.my_builder.x,
            y: voxel.y - builder_store.my_builder.y,
            z: voxel.z - builder_store.my_builder.z,
            color: voxel.color
        }
    })
    return relative_voxels
}

function mapSliceVoxelsTo1DGrid(slice_voxels) {
    const grid = Array.from({ length: 64 }, (_, idx) => '000200')
    for (let voxel of slice_voxels) {
        if(builder_store.my_builder.edit_plane === 'xy'){
            const idx = voxel.x + voxel.y * 8
            grid[idx] = voxel.color
        }
        if(builder_store.my_builder.edit_plane === 'yz'){
            const idx = voxel.y + voxel.z * 8
            grid[idx] = voxel.color
        }
        if(builder_store.my_builder.edit_plane === 'zx'){
            const idx = voxel.z + voxel.x * 8
            grid[idx] = voxel.color
        }
    }
    return grid
}
</script>