import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import * as THREE from 'three'

export const useCameraStore = defineStore('camera', () => {
  const fov = ref(75)
  const aspect = ref(window.innerWidth / window.innerHeight)
  const near = ref(0.1)
  const far = ref(1000)
  const z_position = ref(50)
  const camera = ref(null)

  function createCamera() {
    camera.value = new THREE.PerspectiveCamera(fov.value, aspect.value, near.value, far.value)
    camera.value.position.z = z_position.value
  }

  function updatePosition(dx, dy, dz) {
    camera.value.position.x += dx
    camera.value.position.y += dy
    camera.value.position.z += dz
  } 
  

  return { createCamera, camera, updatePosition }
})
