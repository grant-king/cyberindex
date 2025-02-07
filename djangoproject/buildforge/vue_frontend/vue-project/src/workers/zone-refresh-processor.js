import * as THREE from 'three'

//async onmessage
self.onmessage = async (event) => {
    const message = event.data;
    const x = message[0];
    //console.log('worker received message', message)
    const y = message[1];
    const z = message[2];
    const endpoint = message[3];
    const token = message[4];
    const voxel_list = message[5]; // could be 100000s of voxels, operate on without copying again
    const mesh_list = message[6];
    
    // (to be used by the main thread scene store to select child objects and update their locations 
    // and rotations for subtle animations)
    const near_mesh_new_positions = await getNearestMeshesPositions(x, y, z, endpoint, token, voxel_list, mesh_list)
    
    postMessage(near_mesh_new_positions);
};

async function getNearestMeshesPositions(x, y, z, endpoint, token, voxel_list, mesh_list) {
    // (will need working copies of voxel_list and mesh_list, will return those as well as scene_add and scene_remove lists)
    // await fetch nearest
    
    // this can be simple, we just need to offload some of the 
    // expensive computations from the existing version in the main thread 
    // for now keep this simple and focus on only returning minimal data for the local area
    
    // start with offloading one thing from the mian thread
    // start with just fetching the nearest list
    const nearest_list = await fetchNearest(Math.floor(x), Math.floor(y), Math.floor(z), endpoint, token)

    // and then searching voxel_list to produce a list of indicies
    const mesh_idxs = getMeshListIdxs(nearest_list, voxel_list)
    // use these indicies to identify corresponding object meshes, 
    // and store the object mesh ids in a list
    const mesh_obj_ids = getMeshObject3DId(mesh_idxs, mesh_list)
    // return the parallel nearest list and mesh ids list, or make into a dict
    return buildMeshPosDict(mesh_obj_ids, nearest_list)
    
    
    // use these values to reduce load of the existing zone update system in the main thread
};

function getMeshListIdxs(nearest_list, voxel_list){
    let mesh_idxs = []
    for (const voxel_data of nearest_list) {
        const index = voxel_list.findIndex(item => item.pk === voxel_data.pk)
        mesh_idxs.push(index)
    }
    return mesh_idxs
}

function getMeshObject3DId(mesh_idxs, mesh_list){
    let mesh_obj_ids = []
    for (const idx of mesh_idxs) {
        mesh_obj_ids.push(mesh_list[idx].object.uuid)
    }
    return mesh_obj_ids
}

function buildMeshPosDict(mesh_obj_ids, nearest_list){
    // { xyzobjectid": {x: 1, y:2, z:3 }, ... }
    let mesh_pos_dict = {}
    for (let i = 0; i < mesh_obj_ids.length; i++) {
        const obj_id = mesh_obj_ids[i]
        const voxel_data = nearest_list[i]
        mesh_pos_dict[obj_id] = {x: voxel_data.x, y: voxel_data.y, z: voxel_data.z}
    }
    return mesh_pos_dict

}

async function fetchNearest(x, y, z, endpoint, token) {
    const query_params = new URLSearchParams({
        x: x,
        y: y,
        z: z,
    })
    const response = await fetch(`${endpoint}nearest/?${query_params}`, {
        method: 'GET',
        headers: {
            'X-CSRFToken': token,
        },
    })
    if (response.ok) {
        const data = await response.json()
        //console.log('nearest', data)
        return data
    } else {
        console.error('failed to fetch nearest')
        console.error(response)
    }
}
