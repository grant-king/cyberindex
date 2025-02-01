<template>
    <div class="bg-black/50 overflow-auto">
        <canvas class="" id="three-canvas"></canvas>
    </div>

</template>

<script setup>
import { ref } from 'vue'
import { onMounted } from 'vue'
import { useCameraStore } from '@/stores/camera'
import * as THREE from 'three'

const camera_store = useCameraStore()

onMounted(() => {
    main()
})

function main() {
    const canvas = document.querySelector('#three-canvas')
    const renderer = new THREE.WebGLRenderer({ antialias: true, canvas })
    renderer.setSize(window.innerWidth, window.innerHeight)

    const scene = new THREE.Scene()

    const boxWidth = 1
    const boxHeight = 1
    const boxDepth = 1
    const geometry = new THREE.BoxGeometry(boxWidth, boxHeight, boxDepth)

    const material = new THREE.MeshBasicMaterial({ color: 0x22ff00 })
    const cube = new THREE.Mesh(geometry, material)
    scene.add(cube)

    function render(time) {
        time *= 0.001

        cube.rotation.x = time
        cube.rotation.y = time

        renderer.render(scene, camera_store.camera)

        requestAnimationFrame(render)
    }

    requestAnimationFrame(render)
}
</script>