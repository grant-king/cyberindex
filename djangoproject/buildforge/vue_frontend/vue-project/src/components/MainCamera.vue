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
import * as THREE from 'three'

import { onMounted, onUnmounted } from 'vue'
import { ref, watch } from 'vue'

const camera_store = useCameraStore()
const control_store = useCameracontrolStore()
const collector_store = useCollectorStore()
const scene_store = useSceneStore()
const voxel_store = useVoxelStore()
const claim_worker = new Worker(new URL('../workers/claim-processor.js', import.meta.url))
const zone_worker = new Worker(new URL('../workers/zone-refresh-processor.js', import.meta.url))

claim_worker.onmessage = (e) => {
    console.log(e.data)
}

let measure_interval_id, visual_interval_id, claim_interval_id, zone_refresh_interval_id

onMounted(() => {
    measure_interval_id = setInterval(measureCollector, 200)
    visual_interval_id = setInterval(processVisualQueue, 400)
    claim_interval_id = setInterval(processClaimQueue, 800)
    //update_nearest_interval_id = setInterval(() => {
    //    voxel_store.updateNearest(
    //        camera_store.camera.position.x,
    //        camera_store.camera.position.y,
    //        camera_store.camera.position.z
    //    )
    //}, 2000)
    zone_refresh_interval_id = setInterval(processZoneRefresh, 4000)
})

onUnmounted(() => {
    clearInterval(measure_interval_id)
    clearInterval(visual_interval_id)
    clearInterval(claim_interval_id)
    clearInterval(zone_refresh_interval_id)
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
        console.log("sending pk to claim_worker:", wkr_message)
        claim_worker.postMessage(wkr_message)
    }
    collector_store.claim_queue = []
}

async function processZoneRefresh() {
    // I think this is not the best way to show world updates. Fun for the zone update side-effect animation but extemely 
    // inefficient as most of the world  will not change frequently.
    // the most cost effective route would to have the backend filter a list of changes for a period of time, per request
    // (there is no model or field that will do this now, will have to figure it out... the forgotten PlacementPromise model may do it)
    // and then send those changes to the client when the client requests a refresh at a regular interval
    // client sends timestamp of last request, server sends all changes within a much larger zone since that time and a new timestamp
    // also should be storing this fetched voxel data in localdb and not in the store; store can wrap the localdb for working storage and convenience methods

    //return if velocity is too high
    if (control_store.velocity.x > 0.04 || control_store.velocity.x < -0.04
    || control_store.velocity.y > 0.04 || control_store.velocity.y < -0.04
    || control_store.velocity.z > 0.04 || control_store.velocity.z < -0.04) {
        console.log("velocity too high, skipping zone refresh")
        return
    }
    const x = camera_store.camera.position.x
    const y = camera_store.camera.position.y
    const z = camera_store.camera.position.z
    const endpoint = '/apiv1/voxels/'
    const token = window.csrf_token
    const voxel_list = JSON.parse(JSON.stringify(voxel_store.voxel_list))
    const mesh_list = JSON.parse(JSON.stringify(voxel_store.voxel_mesh_list))
    //const wkr_message = {x, y, z, endpoint, token, voxel_list, mesh_list}
    const wkr_message = [x, y, z, endpoint, token, voxel_list, mesh_list]
    //console.log("sending zone refresh to zone_worker:", wkr_message)
    zone_worker.postMessage(wkr_message)
    // on message from worker, update voxel_list and mesh_list
    zone_worker.onmessage = (e) => {
        console.log("zone_worker message:", e.data)
        const near_mesh_new_positions = e.data

        for (const [obj_uuid, position] of Object.entries(near_mesh_new_positions)) {
            if (obj_uuid.startsWith('CREATENEW')){
                // push voxel data to voxel_list, extract pk from after CREATENEW_
                const voxel_pk = obj_uuid.split('_')[1]
                voxel_store.voxel_list.push({pk: voxel_pk, x: position.x, y: position.y, z: position.z, color: position.color})
                // draw new mesh with voxel store (also adds to mesh_list)
                const new_mesh = voxel_store.drawVoxel(
                    position.x, position.y, position.z, `#${position.color}`)
                // add new returned mesh to scene with scene store
                scene_store.add(new_mesh)
                // note: consider not updating hashmap, so that they are temporarily uncollectible
            } else {
                scene_store.updateObjPos(obj_uuid, position.x, position.y, position.z)
            }
        }

    }
}

</script>