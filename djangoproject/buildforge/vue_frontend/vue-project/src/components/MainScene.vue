<template>

</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useSceneStore } from '@/stores/scene';
import { useVoxelStore } from '@/stores/voxel';
import { useLightStore } from '@/stores/light';

const scene_store = useSceneStore()
const light_store = useLightStore()
const voxel_store = useVoxelStore()

onMounted(() => {
    createSun()
    createLand()
    createTower()
    buildScene()
})

function createSun() {
    light_store.createLight(4, 8, 16)
    light_store.createLight(-4, 8, 16)
}

function createLand() {
    const voxel_store = useVoxelStore()
    for (let i = -16; i < 16; i++) {
        for (let j = -1; j < 0; j++) {
            for (let k = -16; k < 16; k++) {
                voxel_store.createVoxel(i, j, k)
            }
        }
    }
}

function createTower() {
    const voxel_store = useVoxelStore()
    for (let i = -2; i < 2; i++) {
        for (let j = 0; j < 20; j++) {
            for (let k = -2; k < 2; k++) {
                voxel_store.createVoxel(i, j, k)
            }
        }
    }
}

function buildScene() {
    // add lights
    for (let light of light_store.light_list) {
        const light_copy = light.clone()
        scene_store.add(light_copy)
    }
    // add voxels
    for (let voxel of voxel_store.voxel_list) {
        const voxel_copy = voxel.clone()
        scene_store.add(voxel_copy)
    }
}



</script>