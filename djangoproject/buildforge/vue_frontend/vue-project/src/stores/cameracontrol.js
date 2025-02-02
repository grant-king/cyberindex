import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import * as THREE from 'three'
import { useCameraStore } from './camera.js'

const camera_store = useCameraStore()

export const useCameracontrolStore = defineStore('cameracontrol', () => {
  const relative_orientation = ref(new THREE.Vector3(0, 0, -1))
  const position = ref(new THREE.Vector3())
  const velocity = ref(new THREE.Vector3())
  const acceleration = ref(new THREE.Vector3())

  function updateCameraPosition(delta_time) {
    velocity.value.add(acceleration.value.clone().multiplyScalar(delta_time))
    position.value.add(velocity.value.clone().multiplyScalar(delta_time))
    camera_store.camera.position.copy(position.value)
  }
   
  

  return { updateCameraPosition  }
})
