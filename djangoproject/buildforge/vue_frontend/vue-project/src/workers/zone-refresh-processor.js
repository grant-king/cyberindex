onmessage = (event) => {
    const message = e.data;
    const result = processClaim();
    postMessage(result);
};

async function refreshZone() {
    // (will need working copies of voxel_list and mesh_list, will return those as well as scene_add and scene_remove lists)
    // await fetch nearest

    // determine a list of indicies to find each (already-rendered) world voxel pk in the voxel store voxel_list
    // list should be length of response.data, containing corresponding index or -1 if the voxel is new

    // process index list
    // for each index 

    // if the index is > -1 (if voxel is already loaded in world, could have moved )
    // remove old voxel data from voxel_list, 
    // push new voxel data to voxel_list
    // pull old mesh from mesh_list
    // remove old mesh from scene (add to a remove_mesh return list that can be iterated over with scene store.remove())
    // draw new mesh, or update location of pulled
    // push new mesh to mesh_list
    // add mesh to scene  (add to a add_mesh return list that can be used by scene store.add())

    // if the index is -1 (if voxel wasn't loaded with world, was being held then but is now placed)
    // push new voxel data to voxel_list
    // draw new mesh using voxel data
    // push new mesh to mesh list
    // add mesh to scene.add() return list

}

async function fetchNearest(x, y, z, endpoint) {
    const query_params = new URLSearchParams({
        x: x,
        y: y,
        z: z,
    })
    const response = await fetch(`${endpoint}nearest/?${query_params}`, {
        method: 'GET',
        headers: {
            'X-CSRFToken': window.csrf_token,
        },
    })
    if (response.ok) {
        const data = await response.json()
        console.log('nearest', data)
        return data
    } else {
        console.error('failed to fetch nearest')
        console.error(response)
    }
}