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


    const [nearest_list, mesh_ids] = await refreshZone(x, y, z, endpoint, token, voxel_list, mesh_list)
    const new_hash_map = 1
    const new_light_objs = createLightObjs()

    postMessage([new_voxel_list, new_voxel_objs, new_hash_map, new_light_objs]);
};

async function refreshZone(x, y, z, endpoint, token, voxel_list, mesh_list) {
    // (will need working copies of voxel_list and mesh_list, will return those as well as scene_add and scene_remove lists)
    // await fetch nearest
    const nearest_list = await fetchNearest(Math.floor(x), Math.floor(y), Math.floor(z), endpoint, token)
    //console.log('nearest_list', nearest_list)

    // this can be simple, we just need to offload some of the 
    // expensive computations from the existing version in the main thread 
    // for now keep this simple and focus on only returning minimal data for the local area

    // start with offloading one thing from the mian thread
    // start with just fetching the nearest list
    // and then searching voxel_list to produce a list of indicies 
    // use these indicies to identify corresponding object meshes, 
    // and store the object mesh ids in a list 
    // return the parallel nearest list and mesh ids list, or make into a dict 
    // { xyzobjectid": {x: 1, y:2, z:3 }, ... }
    // (to be used by the main thread scene store to select child objects and update their locations 
    // and rotations for subtle animations)

    // use these values to reduce load of the existing zone update system in the main thread
};

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
        console.log('nearest', data)
        return data
    } else {
        console.error('failed to fetch nearest')
        console.error(response)
    }
}
