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
import { useCameracontrolStore } from '@/stores/cameracontrol'

import { onMounted, onUnmounted } from 'vue'
import { ref, watch } from 'vue'

const camera_store = useCameraStore()
const control_store = useCameracontrolStore()
const collector_store = useCollectorStore()
const scene_store = useSceneStore()
const voxel_store = useVoxelStore()
const worker = new Worker(new URL('@/workers/claim-processor.js', import.meta.url))

worker.onmessage = (e) => {
    console.log(e.data)
}

let measure_interval_id, visual_interval_id, claim_interval_id, update_nearest_interval_id

onMounted(() => {
    measure_interval_id = setInterval(measureCollector, 200)
    visual_interval_id = setInterval(processVisualQueue, 400)
    claim_interval_id = setInterval(processClaimQueue, 800)
    update_nearest_interval_id = setInterval(() => {
        voxel_store.updateNearest(
            camera_store.camera.position.x,
            camera_store.camera.position.y,
            camera_store.camera.position.z
        )
    }, 2000)
})

onUnmounted(() => {
    clearInterval(measure_interval_id)
    clearInterval(visual_interval_id)
    clearInterval(claim_interval_id)
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
            // dampen camera velocity
            control_store.dampening(0.8)
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
        //collector_store.createClaim(collectible.pk)
        const wkr_message = [collectible.pk, '/apiv1/claims/', window.csrf_token]
        console.log("sending pk to worker:", wkr_message)
        worker.postMessage(wkr_message)
    }
    collector_store.claim_queue = []
}

</script>