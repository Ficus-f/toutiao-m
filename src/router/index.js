import { createRouter, createWebHashHistory } from 'vue-router'

// 路由表
const routes = [
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/login/index.vue')
  }, {
    path: '/',
    // name: 'Layout',
    component: () => import('@/views/layout'),
    children: [
      {
        path: '',
        redirect: 'home'
      }, {
        path: 'home',
        name: 'home',
        component: () => import('@/views/home')
      }, {
        path: 'qa',
        name: 'qa',
        component: () => import('@/views/qa')
      }, {
        path: 'video',
        name: 'video',
        component: () => import('@/views/video')
      }, {
        path: 'my',
        name: 'my',
        component: () => import('@/views/my')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
