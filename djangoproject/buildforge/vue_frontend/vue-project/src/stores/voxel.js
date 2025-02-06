import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import * as THREE from 'three'
import alphaMapUrl from '@/assets/alpha_map.png'

export const useVoxelStore = defineStore('voxel', () => {
  const voxel_list = ref([])
  const voxel_mesh_list = ref([])
  const base_url = window.location.origin
  const endpoint = `${base_url}/apiv1/voxels/`
  const next_page = ref(`${endpoint}?page=1`)
  const slice_endpoint = `${endpoint}slice/`
  const slice_cache = {}

  async function drawVoxels() {
    for (const voxel of voxel_list.value) {
      drawVoxel(voxel.x, voxel.y, voxel.z, `#${voxel.color}`)
    }
  }

  function drawVoxel(x, y, z, color) {
    const geometry = new THREE.BoxGeometry(1, 1, 1)
    //const color = Math.random() * 0xffffff
    //const alpha_map = new THREE.TextureLoader().load(alphaMapUrl)
    //const material = new THREE.MeshPhongMaterial({ color: color, alphaMap: alpha_map, combine: THREE.MixOperation, transparent: true })
    const material = new THREE.MeshPhongMaterial({ color: color })
    const voxel = new THREE.Mesh(geometry, material)
    voxel.position.set(x, y, z)
    // add a very slight random rotation
    voxel.rotation.set(
      Math.random() * 0.04,
      Math.random() * 0.04,
      Math.random() * 0.04
    )

    voxel_mesh_list.value.push(voxel)
    //console.log('voxel mesh:', voxel)
    return voxel
  }

  async function fetchVoxels() {
    if (next_page.value === null) {
      console.log('no more pages to fetch')
      return
    }
    const response = await fetch(next_page.value, {
      method: 'GET',
      headers: {
        'X-CSRFToken': window.csrf_token,
      },
    })
    const data = await response.json()
    if (response.ok) {
      console.log('voxels', data)
      voxel_list.value.push(...data.results)
      next_page.value = data.next
    } else {
      console.error('failed to fetch voxels')
      console.error(response)
    }
  }

  function pullVoxelMesh(voxel_pk) {
    console.log('removing voxel and returning mesh', voxel_pk)
    // find index of voxel with matching pk in data list
    const index = voxel_list.value.findIndex(voxel => voxel.pk === voxel_pk)
    console.log('index', index)
    if (index > -1) {
      // remove from data list
      voxel_list.value.splice(index, 1)
      // remove from mesh list
      //const voxel_mesh = voxel_mesh_list.value[index]
      const voxel_mesh = voxel_mesh_list.value.splice(index, 1)
      return voxel_mesh[0]
    }
  }

  async function fetchVoxelsInSlice(x, y, z, size = 8, plane = 'xy') {
    if (slice_cache[`${x},${y},${z},${size},${plane}`] !== undefined) {
      console.log('slice cache hit')
      //return slice_cache[`${x},${y},${z},${size},${plane}`]
    }
    const query_params = new URLSearchParams({
      x: x,
      y: y,
      z: z,
      size: size,
      plane: plane,
    })
    const response = await fetch(`${slice_endpoint}?${query_params}`, {
      method: 'GET',
      headers: {
        'X-CSRFToken': window.csrf_token,
      },
    })
    if (response.ok) {
      const data = await response.json()
      console.log('slice', data)
      slice_cache[`${x},${y},${z},${size},${plane}`] = data
      return data
    } else {
      console.error('failed to fetch slice')
      console.error(response)
    }

  }

  async function placeVoxel(voxel_pk, x, y, z, color){
    await updateVoxel(voxel_pk, x, y, z, color)
  }

  async function updateVoxel(voxel_pk, x, y, z, color) {
    const form_data = new FormData()
    form_data.append('pk', voxel_pk)
    form_data.append('x', x)
    form_data.append('y', y)
    form_data.append('z', z)
    const response = await fetch(`${endpoint}move/`, {
      method: 'POST',
      headers: {
        'X-CSRFToken': window.csrf_token,
      },
      body: form_data,
    })
    const data = await response.json()
    if (response.ok) {
      console.log('placed voxel', data)
      voxel_list.value.push(data)
      drawVoxel(data.x, data.y, data.z, `#${data.color}`)
      return data
    } else {
      console.error('failed to place voxel')
      console.error(response)
    }
  }




  return { 
    voxel_mesh_list, pullVoxelMesh, voxel_list, 
    drawVoxels, fetchVoxels, fetchVoxelsInSlice,
    placeVoxel 
  }
})
