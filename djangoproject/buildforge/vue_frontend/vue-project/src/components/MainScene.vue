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
    createLand(32, 32)
    createRandomTowers(16, 16)
    buildScene()
})

function createSun() {
    light_store.createLight(4, 8, 16)
    light_store.createLight(-4, 8, 16)
    light_store.createLight(0, 50, -2)
}

function createLand(plane_width, plane_depth) {
    const voxel_store = useVoxelStore()
    for (let i = -1*plane_width; i < plane_width; i++) {
        for (let j = -1; j < 0; j++) {
            for (let k = -1*plane_depth; k < plane_depth; k++) {
                voxel_store.createVoxel(i, j, k)
            }
        }
    }
}

function createTower(x, z, height) {
    const voxel_store = useVoxelStore()

    for (let j = 0; j < height; j++){
        voxel_store.createVoxel(x, j, z)
    }
    
}

function createRandomTowers(plane_width, plane_depth) {
    for (let i = -1*plane_width; i < plane_width; i+=4) {
        for (let k = -1*plane_depth; k < plane_depth; k+=4) {
            const height = Math.floor(Math.random() * 16)
            createTower(i, k, height)
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