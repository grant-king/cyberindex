import { ref, computed, toRaw } from 'vue'
import { defineStore } from 'pinia'
import * as THREE from 'three'

export const useSceneStore = defineStore('scene', () => {
  const current_scene = ref(null)

  const render_scene = computed(() => {
    return toRaw(current_scene.value)
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
    //current_scene.value.needsUpdate = true
  }

  function remove(obj) {
    if (current_scene.value === null) {
      initScene()
    }
    //const raw_obj = toRaw(obj)
    //console.log('current scene', current_scene.value)
    //console.log('removing object', raw_obj)
    current_scene.value.remove(obj)
    //console.log('current scene', current_scene.value)
    current_scene.value.updateWorldMatrix()
  }

  return { initScene, current_scene, render_scene, add, remove  }
})
