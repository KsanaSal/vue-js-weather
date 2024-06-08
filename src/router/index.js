import { createRouter, createWebHistory } from 'vue-router'
import Main from '@/components/Main.vue'
import About from '@/components/About.vue'

const routers = [
  {
    path: '/',
    name: 'Main',
    component: Main
  },
  {
    path: '/about',
    name: 'About',
    component: About
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes: routers
})

export default router
