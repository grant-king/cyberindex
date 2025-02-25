<template>
    <div class="bg-black/50 overflow-auto">
        <canvas class="" id="three-canvas"></canvas>
    </div>

</template>

<script setup>
import { onUnmounted, ref, watch } from 'vue'
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
let animation_frame_id = null

onMounted(() => {
    scene_store.initScene()
    main()
})

onUnmounted(() => {
    if (animation_frame_id) {
        cancelAnimationFrame(animation_frame_id)
    }
})

function main() {
    const canvas = document.querySelector('#three-canvas')
    renderer = new THREE.WebGLRenderer({ antialias: true, canvas })
    renderer.setSize(window.innerWidth, window.innerHeight)
    
    cameracontrol_store.initControls() // can move to MainCamera.vue

    // request first frame and start loop
    animation_frame_id = requestAnimationFrame(rendering_loop)    
}

function rendering_loop(start_time) {
    if (cameracontrol_store.pointer_controls.isLocked === true) {
        cameracontrol_store.updateCameraPosition(clock.getDelta())
    }
    
    renderer.render(scene_store.render_scene, camera_store.camera)
    animation_frame_id = requestAnimationFrame(rendering_loop)
}

// watch for changes to scene_store.render_scene
watch(() => scene_store.render_scene, (new_scene, old_scene) => {
    console.log('scene changed', new_scene, old_scene)
    renderer.render(new_scene, camera_store.camera)
    // cancel the current animation frame
    if (animation_frame_id) {
        cancelAnimationFrame(animation_frame_id)
    }
    
    animation_frame_id = requestAnimationFrame(rendering_loop)
})

// watch for changes to camera_store.camera
watch(() => camera_store.camera, (new_camera, old_camera) => {
    console.log('camera changed', new_camera, old_camera)
    renderer.render(scene_store.render_scene, new_camera)
    // cancel the current animation frame
    if (animation_frame_id) {
        cancelAnimationFrame(animation_frame_id)
    }
    
    animation_frame_id = requestAnimationFrame(rendering_loop)
})
</script>