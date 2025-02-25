import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import * as THREE from 'three'
import { PointerLockControls } from 'three/examples/jsm/controls/PointerLockControls.js'
import { useCameraStore } from './camera.js'
import { useSceneStore } from './scene.js'

const camera_store = useCameraStore()

export const useCameracontrolStore = defineStore('cameracontrol', () => {
  const relative_orientation = ref(new THREE.Vector3(0, 0, 0))
  const position = ref(new THREE.Vector3())
  const velocity = ref(new THREE.Vector3())
  const current_rotational_velocity = ref(new THREE.Vector2()) // x = pitch, y = yaw
  const target_rotational_velocity = ref(new THREE.Vector2())
  const acceleration = ref(new THREE.Vector3())
  const pointer_controls = ref(null)
  const gamepad_camera_rig = ref(null)
  const acceleration_constant = 2
  const keys_pressed = ref({
    forward: false,
    backward: false,
    left: false,
    right: false,
    up: false,
    down: false,
  })
  const gamepad = ref(null)

  function initControls() {
    pointer_controls.value = new PointerLockControls(camera_store.createCamera(), document.body)
    camera_store.camera = pointer_controls.value.object
    const canvas = document.getElementById('three-canvas')
    canvas.addEventListener('click', function () {
      pointer_controls.value.lock()
    })
    window.addEventListener('keydown', onKeyDown)
    window.addEventListener('keyup', onKeyUp)
    window.addEventListener('gamepadconnected', gamepadconnected)
  }

  function gamepadconnected(event) {
    console.log('gamepad connected================================', event.gamepad.id)
    gamepad.value = event.gamepad
    const scene_store = useSceneStore()
    scene_store.add(camera_store.createCameraRig())
    //pointer_controls.value = new PointerLockControls(camera_store.camera_rig.object[0].object[0].object[0], document.body)
  }

  function pollGamepad() {
    if (!gamepad.value) {
      return
    }
    const gamepads = navigator.getGamepads()
    gamepad.value = navigator.getGamepads()[0]
    if (gamepad.value) {
      const button_x = gamepad.value.buttons[0]
      const button_o = gamepad.value.buttons[1]
      const button_sqare = gamepad.value.buttons[2]
      const button_triangle = gamepad.value.buttons[3]
      const button_lbutt = gamepad.value.buttons[4]
      const button_rbutt = gamepad.value.buttons[5]
      const button_ltrigger = gamepad.value.buttons[6]
      const button_rtrigger = gamepad.value.buttons[7]
      const button_share = gamepad.value.buttons[8]
      const button_options = gamepad.value.buttons[9]
      const button_ldepress = gamepad.value.buttons[10]
      const button_rdepress = gamepad.value.buttons[11]
      const button_up = gamepad.value.buttons[12]
      const button_down = gamepad.value.buttons[13]
      const button_left = gamepad.value.buttons[14]
      const button_right = gamepad.value.buttons[15]
      const button_system = gamepad.value.buttons[16]
      const axis_left_x = gamepad.value.axes[0]
      const axis_left_y = gamepad.value.axes[1]
      const axis_right_x = gamepad.value.axes[2]
      const axis_right_y = gamepad.value.axes[3]

      if (button_x.pressed) console.log('x')
      if (button_o.pressed) console.log('o')
      if (button_sqare.pressed) console.log('sqare')
      if (button_triangle.pressed) console.log('triangle')
      if (button_lbutt.pressed) console.log('lbutt')
      if (button_rbutt.pressed) console.log('rbutt')
      if (button_ltrigger.pressed) {
        console.log('ltrigger')
        keys_pressed.value.down = true
      } 
      else {
        keys_pressed.value.down = false
      }
      if (button_rtrigger.pressed){
        console.log('rtrigger')
        keys_pressed.value.up = true
      } else {
        keys_pressed.value.up = false
      }
      if (button_share.pressed) console.log('share')
      if (button_options.pressed) console.log('options')
      if (button_ldepress.pressed) console.log('ldepress')
      if (button_rdepress.pressed) console.log('rdepress')
      if (button_up.pressed || axis_left_y < -0.1) {
        console.log('up')
        keys_pressed.value.forward = true
      } else {
        keys_pressed.value.forward = false
      }
      if (button_down.pressed || axis_left_y > 0.1) {
        console.log('down')
        keys_pressed.value.backward = true
      } else {
        keys_pressed.value.backward = false
      }
      if (button_left.pressed || axis_left_x < -0.1) {
        console.log('left')
        keys_pressed.value.left = true
      } else {
        keys_pressed.value.left = false
      }
      if (button_right.pressed || axis_left_x > 0.1) {
        console.log('right')
        keys_pressed.value.right = true
      } else {
        keys_pressed.value.right = false
      } 
      if (button_system.pressed) {
        console.log('system/home/guide')
        // exit pointerlock controls
        pointer_controls.value.unlock()  
      } 
      
      //console.log('right stick x:', axis_right_x) // yaw around y, controlled by right stick x axis
      target_rotational_velocity.value.y += axis_right_x * 0.1
      
      //console.log('right stick y:', axis_right_y) // pitch around x, controlled by right stick y axis
      target_rotational_velocity.value.x -= axis_right_y  * 0.04
    }
  }


  function updateCameraPosition(delta_time) {
    updateOrientation(delta_time)
    velocity.value.add(acceleration.value.clone().multiplyScalar(delta_time))
    position.value.add(velocity.value.clone().multiplyScalar(delta_time))
    //camera_store.camera.position.copy(position.value)
    camera_store.updateRigPos(position.value)
    updateGamepadRotation(position, delta_time)
    
    dampening(delta_time)
  }
  
  function updateGamepadRotation(position, delta_time) {
    if (!gamepad.value) {
      console.log('no gamepad connected')
      return
      
    }
    
    current_rotational_velocity.value.lerp(target_rotational_velocity.value, 0.1)

    // yaw object
    camera_store.camera_rig.children[0].rotation.y -= current_rotational_velocity.value.y * delta_time
    // pitch object
    camera_store.camera_rig.children[0].children[0].rotation.x -= current_rotational_velocity.value.x * delta_time
  }

  function updateOrientation(delta_time) {
    if (keys_pressed.value.forward) relative_orientation.value.z -= delta_time
    if (keys_pressed.value.backward) relative_orientation.value.z += delta_time
    if (keys_pressed.value.left) relative_orientation.value.x -= delta_time
    if (keys_pressed.value.right) relative_orientation.value.x += delta_time
    if (keys_pressed.value.up) relative_orientation.value.y += delta_time
    if (keys_pressed.value.down) relative_orientation.value.y -= delta_time

    if (relative_orientation.value.lengthSq() > 0) {
      relative_orientation.value.normalize()
      relative_orientation.value.applyQuaternion(camera_store.camera.quaternion)
      acceleration.value.copy(relative_orientation.value).multiplyScalar(acceleration_constant)
      relative_orientation.value.set(0, 0, 0)
    }
  }

  function dampening(delta_time) {
    const dampening_temporal = Math.abs(1 - delta_time)
    velocity.value.multiplyScalar(dampening_temporal)
    acceleration.value.multiplyScalar(0.9 - dampening_temporal)
    target_rotational_velocity.value.multiplyScalar(dampening_temporal)
  }

  function onKeyDown(event) {
    console.log('key pressed', event.code)
    switch (event.code) {
      case 'KeyW':
      case 'ArrowUp':
        keys_pressed.value.forward = true
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

  function onKeyUp(event) {
    switch (event.code) {
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

  return { updateCameraPosition, initControls, pollGamepad, pointer_controls, dampening, velocity }
})
