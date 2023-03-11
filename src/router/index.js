import { createRouter, createWebHashHistory } from 'vue-router'
import { useStore } from '@/store'

const routes = [
  {
    path: '/',
    name: 'useCase',
    redirect: '/svgIcon',
    component: () => import('@/components/layout/index.vue'),
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
  // 菜单路径
  const menuPaths = ['/', '/login', '/404', ...store.menuPaths]
  // 首个菜单路径
  const firstMenuPath = store.firstMenuPath
  
  // 路由拦截
  if (!store.token && to.path !== '/login') {
    next('/login')
  } else if (!menuPaths.includes(to.path)) {
    if (to.path != '/index') {
      ElMessage.error('暂无权限访问')
    }
    next(firstMenuPath)
  } else {
    next()
  }
})

export default router
