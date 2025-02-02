<template>

</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useSceneStore } from '@/stores/scene';

const scene_store = useSceneStore()

onMounted(() => {
    //scene_store.initScene()
})

</script>