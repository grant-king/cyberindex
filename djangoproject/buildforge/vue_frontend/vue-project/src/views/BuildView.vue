<template>
    <!-- Plane Painter -->
    <div class="border-16 border-dotted transfrom-flat rotate-x-180"
    :style="{ borderColor: `#${current_color}` }">
        <div class="bg-black overflow-auto max-w-4xl mx-auto p-4">
            <div class="grid grid-cols-16 gap-1">
                <div v-for="slot in grid_slots" :key="slot" class="column">
                    <div class="aspect-square w-auto border border-white/50"
                    :style="{ backgroundColor: `#${slot_colors[slot]}` }"
                    @click="paintSlot(slot)">
                        
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- Builder Navigator -->
    <div></div>
    <div></div>
    <div class="flex flex-wrap justify-center object-center">
        <BuilderPosGizmo />
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
import { ref, onMounted, watch } from 'vue';
import { useCollectorStore } from '@/stores/collector';
import { useBuilderStore } from '@/stores/builder';
import { useVoxelStore } from '@/stores/voxel';
import BuilderPosGizmo from '@/components/BuilderPosGizmo.vue';

const collector_store = useCollectorStore()
const builder_store = useBuilderStore()
const voxel_store = useVoxelStore()

const current_color = ref('001100')
const next_color_idx = ref(0)
const current_world_slice_voxels = ref({})
const translated_world_slice_voxels = ref({})

const grid_slots = ref(Array.from({ length: 256 }, (_, idx) => idx))
const slot_colors = ref(Array.from({ length: 256 }, (_, idx) => '000200'))

onMounted(async () => {
    await collector_store.fetchClaims()
    advanceCurrentColor()
    await builder_store.fetchMyBuilder()
    await redrawSlice()
    
})

watch(() => builder_store.my_builder.x, async () => {
    //builder_store.updateBuilder()
    redrawSlice()
})
watch(() => builder_store.my_builder.y, async () => {
    //builder_store.updateBuilder()
    redrawSlice()
})
watch(() => builder_store.my_builder.z, async () => {
    //builder_store.updateBuilder()
    redrawSlice()
})
watch(() => builder_store.my_builder.edit_plane, async () => {
    //builder_store.updateBuilder()
    redrawSlice()
})

async function redrawSlice() {
    current_world_slice_voxels.value = await voxel_store.fetchVoxelsInSlice(
        builder_store.my_builder.x, 
        builder_store.my_builder.y, 
        builder_store.my_builder.z,
        16,
        builder_store.my_builder.edit_plane)
    const relative_voxels = convertSliceWorldCoordsToRelative2D(current_world_slice_voxels.value)
    console.log('original', current_world_slice_voxels.value)
    console.log('relative', relative_voxels)
    slot_colors.value = mapSliceVoxelsTo1DGrid(relative_voxels)
}

async function paintSlot(slot) {
    //todo: if slot is already occupied, collect the associated voxel and unpaint the slot
    // althought this would prevent multiple voxels from occupying the same space, which is not the goal
    // need some way to let the users collect voxels while the 3d colleciton is broken
    // or maybe easier to fix the 3d collection first and forget this
    slot_colors.value[slot] = current_color.value
    const claim = collector_store.claim_list.shift()
    const { off_x, off_y, off_z } = slotIdxToWorldCoords(slot)
    console.log(off_x, off_y, off_z)
    await voxel_store.placeVoxel(
        claim.voxel.pk,
        builder_store.my_builder.x + off_x,
        builder_store.my_builder.y + off_y,
        builder_store.my_builder.z + off_z,
    )
    await collector_store.unholdClaim(claim.pk, claim.voxel.pk)
    advanceCurrentColor()
}

function slotIdxToWorldCoords(idx) {
    if (builder_store.my_builder.edit_plane === 'xy') {
        const x = idx % 16
        const y = Math.floor(idx / 16)
        const z = 0
        console.log(x, y, z)
        return { off_x: x, off_y: y, off_z: z }
    }
    if (builder_store.my_builder.edit_plane === 'yz') {
        const x = 0
        const y = idx % 16
        const z = Math.floor(idx / 16)
        return { off_x: x, off_y: y, off_z: z }
    }
    if (builder_store.my_builder.edit_plane === 'zx') {
        const x = Math.floor(idx / 16)
        const y = 0
        const z = idx % 16
        return { off_x: x, off_y: y, off_z: z }
    }
    
}

function advanceCurrentColor(){
    if(collector_store.claim_list.length === 0){
        collector_store.fetchClaims()
    }
    if(collector_store.claim_list.length > 0){
        current_color.value = collector_store.claim_list[0].voxel.color
    }
    else{
        current_color.value = '000200'
    }
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
    const grid = Array.from({ length: 256 }, (_, idx) => '000200')
    for (let voxel of slice_voxels) {
        if(builder_store.my_builder.edit_plane === 'xy'){
            const idx = voxel.x + voxel.y * 16
            grid[idx] = voxel.color
        }
        if(builder_store.my_builder.edit_plane === 'yz'){
            const idx = voxel.y + voxel.z * 16
            grid[idx] = voxel.color
        }
        if(builder_store.my_builder.edit_plane === 'zx'){
            const idx = voxel.z + voxel.x * 16
            grid[idx] = voxel.color
        }
    }
    return grid
}
</script>