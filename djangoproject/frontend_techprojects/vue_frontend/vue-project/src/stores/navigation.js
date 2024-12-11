import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useNavigationStore = defineStore('navigation', () => {
  const count = ref(0)
  
  const userIsAuthenticated = computed(() => {
    if (window.user_id) {
      return true
    }
    else {
      return false
    }
  })
  
  function increment() {
    count.value++
  }

  return { count, userIsAuthenticated, increment }
})
