<template>

</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useSceneStore } from '@/stores/scene';
import { useVoxelStore } from '@/stores/voxel';

const scene_store = useSceneStore()

onMounted(() => {
    build_scene()
})

function build_scene() {
    const voxel_store = useVoxelStore()
    for (let i = -16; i < 16; i++) {
        for (let j = -16; j < 16; j++) {
            for (let k = 0; k < 1; k++) {
                voxel_store.createVoxel(i, j, k)
            }
        }
    }
    for (let voxel of voxel_store.voxel_list){
        const voxel_copy = voxel.clone()
        scene_store.add(voxel_copy)
    }
}



</script>