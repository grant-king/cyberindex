import { createRouter, createMemoryHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
//import SponsorOnboardingView from '@/views/SponsorOnboardingView.vue'
//import CommunityView from '../views/CommunityView.vue'
import WebGPUView from '@/views/WebGPUView.vue'

const router = createRouter({
  history: createMemoryHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      //component: WebGPUView,
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue'),
    },
    {
      path: '/projectadd',
      name: 'projectadd',
      component: () => import('../views/ProjectAddView.vue'),
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/LoginView.vue'),
    },
    {
      path: '/register',
      name: 'register',
      component: () => import('../views/SignupView.vue'),
    },
    {
      path: '/onboarding',
      name: 'onboarding',
      component: () => import('../views/SponsorOnboardingView.vue'),
    },
    {
      path: '/community',
      name: 'community',
      component: () => import('../views/CommunityView.vue'),
    },
    {
      path: '/webgpu',
      name: 'webgpu',
      component: () => import('../views/WebGPUView.vue'),
    },
  ],
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0, behavior: 'smooth' }
    }
  }
})

export default router
