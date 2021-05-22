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
    path: '/3',
    name: 'Naloga 3',
    component: () => import('../views/Naloga3.vue')
  },
  {
    path: '/4',
    name: 'Naloga 4',
    component: () => import('../views/Naloga4.vue')
  },
  {
    path: '/5',
    name: 'Naloga 5',
    component: () => import('../views/Naloga5.vue')
  },
  {
    path: '/6',
    name: 'Naloga 6',
    component: () => import('../views/Naloga6.vue')
  },
  {
    path: '/7',
    name: 'Naloga 7',
    component: () => import('../views/Naloga7.vue')
  },
  {
    path: '/8',
    name: 'Naloga 8',
    component: () => import('../views/Naloga8.vue')
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
