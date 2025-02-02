import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import * as THREE from 'three'

export const useVoxelStore = defineStore('voxel', () => {
  const voxel_list = ref([])

  function createVoxel(x, y, z) {
    const geometry = new THREE.BoxGeometry(1, 1, 1)
    const color = Math.random() * 0xffffff
    const material = new THREE.MeshPhongMaterial({ color: color })
    const voxel = new THREE.Mesh(geometry, material)
    voxel.position.set(x, y, z)
    voxel_list.value.push(voxel)
    //console.log('voxel_list', voxel_list.value)
    return voxel
  }


  return { createVoxel, voxel_list }
})
