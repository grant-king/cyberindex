import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import * as THREE from 'three'

export const useRendererStore = defineStore('renderer', () => {
    const renderer = ref(null)
    const canvas = ref(null)
    const element_id = ref(null)

    function initRenderer(canvas_element_id) {
        element_id.value = canvas_element_id
        canvas.value = document.getElementById(canvas_element_id)
        if (renderer.value === null) {
            renderer.value = new THREE.WebGLRenderer({ canvas: canvas.value })
            renderer.value.setSize(window.innerWidth, window.innerHeight)
        }

    }
  

  return {  }
})
