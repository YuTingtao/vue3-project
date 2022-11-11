import { createRouter, createWebHashHistory } from 'vue-router'
import { useStore } from '@/store'

const routes = [
  {
    path: '/',
    name: 'layout',
    redirect: '/svgIcon',
    component: () => import('@/layout/index.vue'),
    children: [
      {
        path: '/svgIcon',
        name: 'svgIcon',
        component: () => import('@/views/useCase/svgIcon.vue'),
        meta: {
          // activePath: '', // 导航高亮
        }
      },
      {
        path: '/wangEditor',
        name: 'wangEditor',
        component: () => import('@/views/useCase/wangEditor.vue')
      }
    ]
  },
  // 登录
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/login/login.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    return {
      top: 0
    }
  }
})

router.beforeEach((to, from, next) => {
  const store = useStore()
  if (!store.token && to.path !== '/login') {
    next('/login')
  } else {
    next()
  }
})

export default router
