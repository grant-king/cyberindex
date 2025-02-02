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
    if (event.key === 'a' || event.key === 'ArrowLeft') {
        camera_store.updatePosition(-1, 0, 0)
    }
    if (event.key === 'd' || event.key === 'ArrowRight') {
        camera_store.updatePosition(1, 0, 0)
    }
    if (event.key === 'e' || event.key === 'Shift') {
        camera_store.updatePosition(0, 1, 0)
    }
    if (event.key === 'q' || event.key === 'Control') {
        camera_store.updatePosition(0, -1, 0)
    }
    if (event.key === 'w' || event.key === 'ArrowUp') {
        camera_store.updatePosition(0, 0, -1)
    }
    if (event.key === 's' || event.key === 'ArrowDown') {
        camera_store.updatePosition(0, 0, 1)
    }
}


</script>