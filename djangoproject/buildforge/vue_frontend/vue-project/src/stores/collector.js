import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useCollectorStore = defineStore('collector', () => {
    const collection_queue = ref([])
    const collectibles_hash_map = ref({}) // { 'locationhash': collectible_obj.url }

    function getRegionKey(x, y, z, region_size = 1) {
        const x_plane = Math.floor(x / region_size)
        const y_plane = Math.floor(y / region_size)
        const z_plane = Math.floor(z / region_size)
        return `${x_plane},${y_plane},${z_plane}`
    }

    function buildHashMap(all_collectibles) {
        for (const collectible of all_collectibles) {
            const region_key = getRegionKey(collectible.x, collectible.y, collectible.z)
            if (collectibles_hash_map.value[region_key] === undefined) {
                collectibles_hash_map.value[region_key] = []
            }
            collectibles_hash_map.value[region_key].push(collectible)
        }
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

    return { buildHashMap, getCollectiblesInRegion, collection_queue }
})
