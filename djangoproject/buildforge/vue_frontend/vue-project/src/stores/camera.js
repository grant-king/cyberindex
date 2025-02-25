import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import * as THREE from 'three'
import { loadRouteLocation } from 'vue-router'

export const useCameraStore = defineStore('camera', () => {
  const fov = ref(75)
  const aspect = ref(window.innerWidth / window.innerHeight)
  const near = ref(0.1)
  const far = ref(1000)
  const z_position = ref(0)
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
      camera.value = new THREE.PerspectiveCamera(fov.value, aspect.value, near.value, far.value)
    }
    
    return camera_rig.value
  }

  function updateRigPos(pos) {
    if (camera_rig.value === null) {
      console.log('camera rig not created yet')
      camera.value.position.copy(pos)
      return
    }
    camera_rig.value.position.copy(pos)
    camera.value.position.copy(camera_rig.value.position)
    console.log('camera_rig yaw rotation', camera_rig.value.children[0].rotation)
    camera.value.rotation.y = camera_rig.value.children[0].rotation.y
    camera.value.rotation.x = camera_rig.value.children[0].children[0].rotation.x
  }

  return { createCamera, createCameraRig, camera, yaw_object, pitch_object, camera_rig, updateRigPos }
})
