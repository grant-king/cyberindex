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
import * as THREE from 'three'
import { useCameracontrolStore } from '@/stores/cameracontrol'

const camera_store = useCameraStore()
const scene_store = useSceneStore()
const cameracontrol_store = useCameracontrolStore()

onMounted(() => {
    main()
})

function main() {
    const canvas = document.querySelector('#three-canvas')
    const renderer = new THREE.WebGLRenderer({ antialias: true, canvas })
    renderer.setSize(window.innerWidth, window.innerHeight)

    cameracontrol_store.initControls() // can move to MainCamera.vue

    function render(delta_time) {
        if (cameracontrol_store.pointer_controls.isLocked === true) {
            cameracontrol_store.updateCameraPosition(delta_time / 1000)
        }
        renderer.render(scene_store.render_scene, camera_store.camera)
        requestAnimationFrame(render)
    }

    requestAnimationFrame(render)
}
</script>