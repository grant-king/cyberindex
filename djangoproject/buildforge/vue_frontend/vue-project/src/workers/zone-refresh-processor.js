import * as THREE from 'three'

//async onmessage
self.onmessage = async (event) => {
    const message = event.data;
    const x = message[0];
    console.log('worker received message', message)
    const y = message[1];
    const z = message[2];
    const endpoint = message[3];
    const token = message[4];
    const voxel_list = message[5];
    const mesh_list = message[6];
    const result = await refreshZone(x, y, z, endpoint, token, voxel_list, mesh_list);
    postMessage(result);
};

async function refreshZone(x, y, z, endpoint, token, voxel_list, mesh_list) {
    // (will need working copies of voxel_list and mesh_list, will return those as well as scene_add and scene_remove lists)
    // await fetch nearest
    const nearest_list = await fetchNearest(Math.floor(x), Math.floor(y), Math.floor(z), endpoint, token)
    console.log('nearest_list', nearest_list)

    // determine a list of indicies to find each (already-rendered) world voxel pk in the voxel store voxel_list
    // list should be length of response.data, containing corresponding index or -1 if the voxel is new
    let index_list = []
    for (const voxel of nearest_list) {
        const index = voxel_list.findIndex(v => v.pk === voxel.pk)
        index_list.push(index)
    }
    console.log('index_list', index_list)

    

    // process index list
    let scene_add_list = []
    let scene_remove_list = []
    // for each index 
    for (let i = 0; i < index_list.length; i++) {
        const index = index_list[i]
        const voxel = nearest_list[i]
        if (index > -1) {
            // if the index is > -1 (if voxel is already loaded in world, could have moved )
            // remove old voxel data from voxel_list, 
            voxel_list.splice(index, 1)
            // push new voxel data to voxel_list
            voxel_list.push(voxel)
            // pull old mesh from mesh_list
            const old_mesh = mesh_list.splice(index, 1)[0]
            // remove old mesh from scene (add to a remove_mesh return list that can be iterated over with scene store.remove())
            scene_remove_list.push(old_mesh)
            // draw new mesh, or update location of pulled
            // push new mesh to mesh_list
            // add mesh to scene  (add to a add_mesh return list that can be used by scene store.add())
        } else {
            // if the index is -1 (if voxel wasn't loaded with world, was being held then but is now placed)
            // push new voxel data to voxel_list
            voxel_list.push(voxel)
            // draw new mesh using voxel data
            const new_mesh = drawVoxel(voxel.x, voxel.y, voxel.z, `#${voxel.color}`)
            // push new mesh to mesh list
            mesh_list.push(new_mesh)
            // add mesh to scene.add() return list
            scene_add_list.push(new_mesh)
        }
    }

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

    return [voxel_list, mesh_list, scene_add_list, scene_remove_list]

}

function drawVoxel(x, y, z, color) {
    const geometry = new THREE.BoxGeometry(1, 1, 1)
    const material = new THREE.MeshPhongMaterial({ color: color })
    const voxel_mesh = new THREE.Mesh(geometry, material)
    voxel_mesh.position.set(x, y, z)
    return voxel_mesh
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
        console.log('nearest', data)
        return data
    } else {
        console.error('failed to fetch nearest')
        console.error(response)
    }
}