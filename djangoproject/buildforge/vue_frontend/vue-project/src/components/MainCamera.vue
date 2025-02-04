<template>
    <div>

    </div>

</template>

<script setup>
// collector logic is here for now as the camera is the thing that is moving and collecting
// should move to a component with a better name, "CameraCollector.vue" or something
// logic is in component to easily plug and compose stores so that 
// collector could also be a hand or a boomerang; doesn't have to be attached to the camera

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
    setInterval(measureCollector, 100)
    setInterval(processVisualQueue, 400)
    setInterval(processClaimQueue, 800)
})

onUnmounted(() => {
    clearInterval(measureCollector)
})

function measureCollector() {
    const cam_x = camera_store.camera.position.x
    const cam_y = camera_store.camera.position.y
    const cam_z = camera_store.camera.position.z
    collector_store.getCollectiblesInRegion(cam_x, cam_y, cam_z)
    //console.log(collector_store.collection_queue)
}

// processQueue could be a method of another dedicated component
// as there could be multiple collectors in the scene that only need to
// process the global collection queue once
// for now fine here with this component
function processVisualQueue() {
    for (let collectible of collector_store.collection_queue) {
        // remove voxel from voxel_list
        // remove voxel from voxel_mesh_list
        const obj_3d = voxel_store.pullVoxelMesh(collectible.pk)
        if (obj_3d) {
            // remove voxel from scene
            scene_store.remove(obj_3d)
            // create Claim with voxel pk - will omit voxel from world voxel queryset and work out any collection conflicts
            collector_store.claim_queue.push(collectible)
        }
    }
    collector_store.collection_queue = []
}

async function processClaimQueue() {
    for (let collectible of collector_store.claim_queue) {
        // create Claim with voxel pk - will omit voxel from world voxel queryset and work out any collection conflicts
        collector_store.createClaim(collectible.pk)
    }
    collector_store.claim_queue = []
}

</script>