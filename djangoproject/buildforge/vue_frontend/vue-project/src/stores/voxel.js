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
    const material = new THREE.MeshPhongMaterial({ color: color})
    const voxel = new THREE.Mesh(geometry, material)
    voxel.position.set(x, y, z)
    // add a very slight random rotation
    voxel.rotation.set(
      Math.random() * 0.01,
      Math.random() * 0.01,
      Math.random() * 0.01
    )
    
    voxel_mesh_list.value.push(voxel)
    console.log('voxel mesh:', voxel)
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



  return { voxel_mesh_list, drawVoxels, fetchVoxels }
})
