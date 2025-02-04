import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useCollectorStore = defineStore('collector', () => {
    const collection_queue = ref([])
    const collectibles_hash_map = ref({}) // { 'locationhash': collectible_obj.url }
    const base_url = window.location.origin
    const claims_endpoint = `${base_url}/apiv1/claims/`

    // set interval to check for recent claims from other players in this region, use these to update visual state
    // somewhere set interval to get newly placed voxels in this region, use these to update visual state
    // figure out how to load voxels in chunks as player moves across world, then selectively apply above logic to voxels in this current region

    function getRegionKey(x, y, z, region_size = 1) {
        const x_plane = Math.floor(x / region_size)
        const y_plane = Math.floor(y / region_size)
        const z_plane = Math.floor(z / region_size)
        return `${x_plane},${y_plane},${z_plane}`
    }

    function buildHashMap(all_collectibles) {
        //build or add to hashmap of collectibles by region
        for (const collectible of all_collectibles) {
            const region_key = getRegionKey(collectible.x, collectible.y, collectible.z)
            if (collectibles_hash_map.value[region_key] === undefined) {
                collectibles_hash_map.value[region_key] = []
            }
            collectibles_hash_map.value[region_key].push(collectible)
        }
    }

    function rebuildHashMap(all_collectibles) {
        // clear hashmap and rebuild
        collectibles_hash_map.value = {}
        buildHashMap(all_collectibles)
    }

    function getCollectiblesInRegion(x, y, z, region_size = 1) {
        const region_key = getRegionKey(x, y, z, region_size)
        const current_collectibles = collectibles_hash_map.value[region_key]
        // push unique to queue
        if (current_collectibles === undefined) {
            return
        }
        for (const collectible of current_collectibles) {
            if (!collection_queue.value.includes(collectible)) {
                collection_queue.value.push(collectible)
                console.log('collectible added to queue:', collectible)
            }
        }
    }

    async function createClaim(voxel_pk) {
        const form_data = new FormData()
        form_data.append('voxel', voxel_pk)
        form_data.append('is_holding', true)
        const response = await fetch(claims_endpoint, {
            method: 'POST',
            headers: {
                'X-CSRFToken': window.csrf_token,
            },
            body: form_data,
        })
        const data = await response.json()
        if (response.ok) {
            console.log('created claim', data)
        } else {
            console.error('failed to create claim')
            console.error(response)
        }
    }

    return { createClaim, buildHashMap, rebuildHashMap, getCollectiblesInRegion, collection_queue }
})
