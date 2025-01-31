<template>
    <div class="bg-white/50 p-8">
        <div @click="main">
            Three Demo
        </div>
        <canvas id="three-canvas"></canvas>
    </div>

</template>

<script setup>
import * as THREE from 'three'

function main() {
    const canvas = document.querySelector('#three-canvas')
    const renderer = new THREE.WebGLRenderer({ antialias: true, canvas })

    const fov = 75
    const aspect = 2
    const near = 0.1
    const far = 5
    const camera = new THREE.PerspectiveCamera(fov, aspect, near, far)
    camera.position.z = 2

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

        renderer.render(scene, camera)

        requestAnimationFrame(render)
    }

    requestAnimationFrame(render)
}
</script>