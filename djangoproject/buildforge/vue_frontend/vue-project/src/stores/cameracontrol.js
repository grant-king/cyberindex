import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import * as THREE from 'three'
import { PointerLockControls } from 'three/examples/jsm/controls/PointerLockControls.js'
import { useCameraStore } from './camera.js'

const camera_store = useCameraStore()

export const useCameracontrolStore = defineStore('cameracontrol', () => {
  const relative_orientation = ref(new THREE.Vector3(0, 0, 0))
  const position = ref(new THREE.Vector3())
  const velocity = ref(new THREE.Vector3())
  const acceleration = ref(new THREE.Vector3())
  const pointer_controls = ref(null)
  const acceleration_constant = 0.0001
  const keys_pressed = ref({
    forward: false,
    backward: false,
    left: false,
    right: false,
    up: false,
    down: false,
  })

  function initControls() {
    pointer_controls.value = new PointerLockControls(camera_store.createCamera(), document.body)
    camera_store.camera = pointer_controls.value.object
    document.body.addEventListener('click', function() {
      pointer_controls.value.lock()
    })
    document.body.addEventListener('keydown', onKeyDown)
    document.body.addEventListener('keyup', onKeyUp)
  }

  function updateCameraPosition(delta_time) {
    updateOrientation()
    velocity.value.add(acceleration.value.clone().multiplyScalar(delta_time))
    position.value.add(velocity.value.clone().multiplyScalar(delta_time))
    camera_store.camera.position.copy(position.value)
  }

  function updateOrientation() {
    if (keys_pressed.value.forward) relative_orientation.value.z -= 1
    if (keys_pressed.value.backward) relative_orientation.value.z += 1
    if (keys_pressed.value.left) relative_orientation.value.x -= 1
    if (keys_pressed.value.right) relative_orientation.value.x += 1
    if (keys_pressed.value.up) relative_orientation.value.y += 1
    if (keys_pressed.value.down) relative_orientation.value.y -= 1

    if (relative_orientation.value.lengthSq() > 0) {
      relative_orientation.value.normalize()
      relative_orientation.value.applyQuaternion(camera_store.camera.quaternion)
      acceleration.value.copy(relative_orientation.value).multiplyScalar(acceleration_constant)
      relative_orientation.value.set(0, 0, 0)
    }
  }

  function onKeyDown(event){
    console.log('key pressed', event.code)
    switch(event.code){
      case 'KeyW':
      case 'ArrowUp':
        keys_pressed.value.forward = true
        //acceleration.value.add(relative_orientation.value.clone().multiplyScalar(acceleration_constant))
        //acceleration.value.add(new THREE.Vector3(0, 0, -1).applyQuaternion(camera_store.camera.quaternion).multiplyScalar(acceleration_constant))
        break
      case 'KeyS':
      case 'ArrowDown':
        keys_pressed.value.backward = true
        break
      case 'KeyA':
      case 'ArrowLeft':
        keys_pressed.value.left = true
        break
      case 'KeyD':
      case 'ArrowRight':
        keys_pressed.value.right = true
        break
      case 'Space':
      case 'ShiftRight':
        keys_pressed.value.up = true
        break
      case 'ControlRight':
      case 'ControlLeft':
        keys_pressed.value.down = true
        break
    }
  }

  function onKeyUp(event){
    switch(event.code){
      case 'KeyW':
      case 'ArrowUp':
        keys_pressed.value.forward = false
        break
      case 'KeyS':
      case 'ArrowDown':
        keys_pressed.value.backward = false
        break
      case 'KeyA':
      case 'ArrowLeft':
        keys_pressed.value.left = false
        break
      case 'KeyD':
      case 'ArrowRight':
        keys_pressed.value.right = false
        break
      case 'Space':
      case 'ShiftRight':
        keys_pressed.value.up = false
        break
      case 'ControlRight':
      case 'ControlLeft':
        keys_pressed.value.down = false
        break
    }
  }
   
  

  return { updateCameraPosition, initControls, pointer_controls }
})
