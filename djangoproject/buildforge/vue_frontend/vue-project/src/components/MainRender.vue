<template>
    <div class="bg-black/50 overflow-auto">
        <canvas class="" id="three-canvas"></canvas>
    </div>

</template>

<script setup>
import { ref, watch } from 'vue'
import { onMounted } from 'vue'
import { useCameraStore } from '@/stores/camera'
import { useSceneStore } from '@/stores/scene'
import * as THREE from 'three'
import { useCameracontrolStore } from '@/stores/cameracontrol'
import { useCollectorStore } from '@/stores/collector'

const camera_store = useCameraStore()
const scene_store = useSceneStore()
const cameracontrol_store = useCameracontrolStore()
const collector_store = useCollectorStore()
const clock = new THREE.Clock()
let renderer = new THREE.WebGLRenderer()

onMounted(() => {
    scene_store.initScene()
    main()
})

function main() {
    const canvas = document.querySelector('#three-canvas')
    renderer = new THREE.WebGLRenderer({ antialias: true, canvas })
    renderer.setSize(window.innerWidth, window.innerHeight)
    
    cameracontrol_store.initControls() // can move to MainCamera.vue
    
    // request first frame and start loop
    requestAnimationFrame(rendering_loop)
    
}

function rendering_loop(start_time) {
    if (cameracontrol_store.pointer_controls.isLocked === true) {
        cameracontrol_store.updateCameraPosition(clock.getDelta())
    }
    
    renderer.render(scene_store.render_scene, camera_store.camera)
    requestAnimationFrame(rendering_loop)
    
}
//watch(() => scene_store.current_scene, () => {
//    console.log('scene changed')
//    renderer.render(scene_store.render_scene, camera_store.camera)
//    requestAnimationFrame(render)

//})
</script>