<template>

</template>

<script setup>
import { useCameraStore } from '@/stores/camera';
import { onMounted } from 'vue';

const camera_store = useCameraStore()

onMounted(() => {
    camera_store.createCamera()
})
</script>