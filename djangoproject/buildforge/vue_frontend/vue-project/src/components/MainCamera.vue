<template>
    <div>

    </div>

</template>

<script setup>
import { useCameraStore } from '@/stores/camera'
import { useCollectorStore } from '@/stores/collector'
import { useSceneStore } from '@/stores/scene'
import { useVoxelStore } from '@/stores/voxel'

import { onMounted, onUnmounted } from 'vue'
import { ref, watch } from 'vue'

const camera_store = useCameraStore()
const collector_store = useCollectorStore()
const scene_store = useSceneStore()
const voxel_store = useVoxelStore()

onMounted(() => {
    setInterval(measureCollector, 2000)
})

onUnmounted(() => {
    clearInterval(measureCollector)
})

function measureCollector() {
    const cam_x = camera_store.camera.position.x
    const cam_y = camera_store.camera.position.y
    const cam_z = camera_store.camera.position.z
    collector_store.getCollectiblesInRegion(cam_x, cam_y, cam_z)
    console.log(collector_store.collection_queue)
}

</script>