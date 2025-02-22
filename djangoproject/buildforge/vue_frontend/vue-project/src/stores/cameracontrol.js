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
    console.log('gamepad connected================================', event.gamepad.id, event.gamepad.buttons.length)
    gamepad.value = event.gamepad
  }

  function pollGamepad() {
    if (!gamepad.value) {
      return
    }
    const gamepads = navigator.getGamepads()
    for (let gamepad of gamepads) {
      const button_x = gamepad.buttons[0]
      const button_o = gamepad.buttons[1]
      const button_sqare = gamepad.buttons[2]
      const button_triangle = gamepad.buttons[3]
      const button_lbutt = gamepad.buttons[4]
      const button_rbutt = gamepad.buttons[5]
      const button_ltrigger = gamepad.buttons[6]
      const button_rtrigger = gamepad.buttons[7]
      const button_share = gamepad.buttons[8]
      const button_options = gamepad.buttons[9]
      const button_ldepress = gamepad.buttons[10]
      const button_rdepress = gamepad.buttons[11]
      const button_up = gamepad.buttons[12]
      const button_down = gamepad.buttons[13]
      const button_left = gamepad.buttons[14]
      const button_right = gamepad.buttons[15]
      const button_system = gamepad.buttons[16]

      console.log('gamepad buttons pressed:')
      if (button_x.pressed) console.log('x')
      if (button_o.pressed) console.log('o')
      if (button_sqare.pressed) console.log('sqare')
      if (button_triangle.pressed) console.log('triangle')
      if (button_lbutt.pressed) console.log('lbutt')
      if (button_rbutt.pressed) console.log('rbutt')
      if (button_ltrigger.pressed) console.log('ltrigger')
      if (button_rtrigger.pressed) console.log('rtrigger')
      if (button_share.pressed) console.log('share')
      if (button_options.pressed) console.log('options')
      if (button_ldepress.pressed) console.log('ldepress')
      if (button_rdepress.pressed) console.log('rdepress')
      if (button_up.pressed) console.log('up')
      if (button_down.pressed) console.log('down')
      if (button_left.pressed) console.log('left')
      if (button_right.pressed) console.log('right')
      if (button_system.pressed) console.log('system/home/guide')

    }
  }


  function updateCameraPosition(delta_time) {
    updateOrientation(delta_time)
    velocity.value.add(acceleration.value.clone().multiplyScalar(delta_time))
    position.value.add(velocity.value.clone().multiplyScalar(delta_time))
    camera_store.camera.position.copy(position.value)
    dampening(delta_time)
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
