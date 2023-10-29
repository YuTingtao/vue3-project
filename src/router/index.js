import { createRouter, createWebHashHistory, createWebHistory } from 'vue-router'
import { useStore } from '@/store'
import checkVersion from '../utils/checkVersion.js'

// 路由
const routes = [
  {
    path: '/',
    name: 'index',
    component: () => import('@/layout/index.vue'),
  },
  {
    path: '/useCase',
    name: 'useCase',
    redirect: '',
    component: () => import('@/layout/index.vue'),
    meta: {
      // activePath: '', // 导航高亮
    },
    children: [
      {
        path: '/baseCase',
        name: 'baseCase',
        redirect: '',
        component: () => import('@/views/useCase/baseCase/index.vue'),
        meta: {
          // activePath: '', // 导航高亮
        }
      },
      {
        path: '/wangEditor',
        name: 'wangEditor',
        redirect: '',
        component: () => import('@/views/useCase/wangEditor/index.vue'),
        meta: {
          // activePath: '', // 导航高亮
        },
      }
    ]
  },
  // 登录
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/login/index.vue')
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
  const store = useStore() // store状态
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
