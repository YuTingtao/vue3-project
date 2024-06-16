import { createRouter, createWebHashHistory, createWebHistory } from 'vue-router'
import { useStore } from '@/store'
import routes from './modules/index.js'
import { checkUpdate } from '@/utils/checkUpdate.js'

const allRoutes = [
  {
    path: '/',
    name: 'layout',
    component: () => import('@/layout/index.vue'),
    children: [
      ...routes,
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/login/index.vue')
  },
]
const router = createRouter({
  history: createWebHashHistory(),
  routes: allRoutes,
  scrollBehavior(to, from, savedPosition) {
    return {
      top: 0
    }
  }
})

router.beforeEach((to, from) => {
  const store = useStore()
  // 权限菜单路径
  const authPaths = Object.keys(store.menuObj)
  
  // 路由拦截
  if (!store.token && to.path !== '/login') {
    return '/login'
  }
  if (to.path == '/') {
    return store.firstMenu
  }
  if (to.meta.visible == 1 && !authPaths.includes(to.path)) {
    return store.firstMenu
  }
})

router.onError((error) => {
  console.error(error)
  checkUpdate() // 检测更新
})

export default router
