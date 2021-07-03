import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/1',
    name: 'Naloga 1',
    component: () => import('../views/Naloga1.vue')
  },
  {
    path: '/2',
    name: 'Naloga 2',
    component: () => import('../views/Naloga2.vue')
  },
  {
    path: '/T',
    name: 'Tezka',
    component: () => import('../views/Tezka.vue')
  },
  {
    path: '/L',
    name: 'Lahka',
    component: () => import('../views/Lahka.vue')
  },
  {
    path: '/konec',
    name: 'Cestitke',
    component: () => import('../views/Cestitke.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
