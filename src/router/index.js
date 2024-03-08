import { createRouter, createWebHashHistory, createWebHistory } from 'vue-router'
import { useStore } from '@/store'
import routes from './modules/index.js'
import { checkUpdate } from '@/utils/checkUpdate.js'

const allRoutes = [
  {
    path: '/',
    name: 'layout',
    component: () => import('@/layout/index.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/login/index.vue')
  },
  ...routes,
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

router.beforeEach((to, from, next) => {
  const store = useStore()
  // 所有菜单path数组
  const allPaths = ['/login', '/404', ...Object.keys(store.menuObj)]
  
  // 路由拦截
  if (!store.token && to.path !== '/login') {
    next('/login')
  } else if (!allPaths.includes(to.path)) {
    if (to.path != '/' && to.path != '/404') {
      ElMessage.error('访问地址不存在')
    }
    next(store.firstPath)
  } else {
    next()
  }
})

router.onError((error) => {
  checkUpdate() // 检测更新
})

export default router
