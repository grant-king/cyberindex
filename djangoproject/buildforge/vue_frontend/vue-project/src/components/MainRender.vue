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
import { PointerLockControls } from 'three/examples/jsm/controls/PointerLockControls.js'
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

    const controls = new PointerLockControls(camera_store.createCamera(), renderer.domElement)
    camera_store.camera = controls.object

    renderer.domElement.addEventListener('click', () => {
        controls.lock()
    })

    function render(delta_time) {

        if (controls.isLocked === true) {
            cameracontrol_store.updateCameraPosition(delta_time / 1000)
        }

        renderer.render(scene_store.render_scene, camera_store.camera)

        requestAnimationFrame(render)
    }

    requestAnimationFrame(render)
}
</script>