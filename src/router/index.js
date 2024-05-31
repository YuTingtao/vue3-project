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
  // 所有菜单数组
  const allMenus = ['/login', ...Object.keys(store.menuObj)]
  
  // 路由拦截
  if (!store.token && to.path !== '/login') {
    return '/login'
  } else if (!allMenus.includes(to.path)) {
    return store.firstMenu
  }
})

router.onError((error) => {
  console.error(error)
  checkUpdate() // 检测更新
})

export default router
