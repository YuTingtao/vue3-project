import { createRouter, createWebHashHistory, createWebHistory } from 'vue-router'
import { useStore } from '@/store'
import routes from './routes.js'
import checkVersion from '../utils/checkVersion.js'

const allRoutes = [
  ...routes,
  // 登录
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/login/index.vue')
  }
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
  const allMenus = ['/login', '/404', ...Object.keys(store.flatMenus)] // 所有菜单数组
  
  // 路由拦截
  if (!store.token && to.path !== '/login') {
    next('/login')
  } else if (!allMenus.includes(to.path)) {
    if (to.path != '/' && to.path != '/404') {
      ElMessage.error('访问地址不存在')
    }
    next(store.firstMenuPath)
  } else {
    next()
  }
})

router.onError((error) => {
  checkVersion() // 版本检测
})

export default router
