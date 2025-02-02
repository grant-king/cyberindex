<template>
    <div>

    </div>

</template>

<script setup>
import { useCameraStore } from '@/stores/camera';
import { onMounted } from 'vue';
import { ref, watch } from 'vue';

const camera_store = useCameraStore()

onMounted(() => {
    camera_store.createCamera()
    window.addEventListener('keydown', handleCameraControls)
})

function handleCameraControls(event) {
    if (event.key === 'a') {
        camera_store.updatePosition(-1, 0, 0)
    }
    if (event.key === 'd') {
        camera_store.updatePosition(1, 0, 0)
    }
    if (event.key === 'w') {
        camera_store.updatePosition(0, 1, 0)
    }
    if (event.key === 's') {
        camera_store.updatePosition(0, -1, 0)
    }
    if (event.key === 'e') {
        camera_store.updatePosition(0, 0, -1)
    }
    if (event.key === 'q') {
        camera_store.updatePosition(0, 0, 1)
    }
}


</script>