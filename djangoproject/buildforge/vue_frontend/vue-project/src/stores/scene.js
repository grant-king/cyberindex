import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import * as THREE from 'three'

export const useSceneStore = defineStore('scene', () => {
  const current_scene = ref(null)

  const render_scene = computed(() => {
    return current_scene.value.clone()
  })

  function initScene() {
    console.log('init scene')
    if (current_scene.value === null) {
      console.log('creating new scene')
      current_scene.value = new THREE.Scene()
    }
  }

  function add(obj) {
    if (current_scene.value === null) {
      initScene()
    }
    current_scene.value.add(obj)
  }

  function remove(obj) {
    if (current_scene.value === null) {
      initScene()
    }
    current_scene.value.remove(obj)
  }

  return { initScene, current_scene, render_scene, add, remove  }
})
