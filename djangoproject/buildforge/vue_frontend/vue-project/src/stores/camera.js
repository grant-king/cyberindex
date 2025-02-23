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

  const camera_rig = ref(null)
  const yaw_object = ref(null)
  const pitch_object = ref(null)
  
  function createCamera() {
    if (camera.value === null) {
      camera.value = new THREE.PerspectiveCamera(fov.value, aspect.value, near.value, far.value)
      camera.value.position.z = z_position.value
    }
    return camera.value
  }
  
  function createCameraRig() {
    if (camera_rig.value === null) {  
      camera_rig.value = new THREE.Object3D()
      yaw_object.value = new THREE.Object3D()
      camera_rig.value.add(yaw_object.value)
      pitch_object.value = new THREE.Object3D()
      yaw_object.value.add(pitch_object.value)
      pitch_object.value.add(createCamera())
    }
    
    return camera_rig.value
  }

  function updatePosition(dx, dy, dz) {
    camera.value.position.x += dx
    camera.value.position.y += dy
    camera.value.position.z += dz
  }


  return { createCamera, createCameraRig, camera, updatePosition, yaw_object, pitch_object, camera_rig }
})
