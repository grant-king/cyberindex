import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import * as THREE from 'three'

export const useLightStore = defineStore('light', () => {
  const light_list = ref([])

  function createLight(x, y, z) {
    const color = 0xffffff
    const intensity = 2
    const light = new THREE.DirectionalLight(color, intensity)
    light.position.set(x, y, z)
    light_list.value.push(light)
    return light
  }

  return { createLight, light_list }
})
