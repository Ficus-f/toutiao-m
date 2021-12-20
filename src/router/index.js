import { createRouter, createWebHashHistory } from 'vue-router'

// 路由表
const routes = [
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/login/index.vue')
  }, {
    path: '/',
    name: 'Layout',
    component: () => import('@/views/layout')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
