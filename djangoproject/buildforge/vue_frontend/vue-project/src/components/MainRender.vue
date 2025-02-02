<template>
    <div class="bg-black/50 overflow-auto">
        <canvas class="" id="three-canvas"></canvas>
    </div>

</template>

<script setup>
import { ref } from 'vue'
import { onMounted } from 'vue'
import { useCameraStore } from '@/stores/camera'
import { useSceneStore } from '@/stores/scene'
import { useVoxelStore } from '@/stores/voxel'
import * as THREE from 'three'

const camera_store = useCameraStore()
const scene_store = useSceneStore()
const voxel_store = useVoxelStore()


onMounted(() => {
    main()
})

function main() {
    const canvas = document.querySelector('#three-canvas')
    const renderer = new THREE.WebGLRenderer({ antialias: true, canvas })
    renderer.setSize(window.innerWidth, window.innerHeight)

    const scene = new THREE.Scene()

    for (let i = -20; i < 20; i++) {
        for (let j = -20; j < 20; j++) {
            for (let k = 0; k < 1; k++) {
                voxel_store.createVoxel(i, j, k)
            }
        }
    }
    for (let voxel of voxel_store.voxel_list){
        console.log(voxel)
        const voxel_copy = voxel.clone()
        scene.add(voxel_copy)
    }


    function render(time) {
        time *= 0.001

        renderer.render(scene, camera_store.camera)

        requestAnimationFrame(render)
    }

    requestAnimationFrame(render)
}
</script>