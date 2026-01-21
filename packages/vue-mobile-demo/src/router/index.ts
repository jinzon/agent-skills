import { createRouter, createWebHistory } from 'vue-router'
import RenewalSuccess from '../views/RenewalSuccess.vue'

const routes = [
  {
    path: '/',
    redirect: '/renewal-success'
  },
  {
    path: '/renewal-success',
    name: 'RenewalSuccess',
    component: RenewalSuccess
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
