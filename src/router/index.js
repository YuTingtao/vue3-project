import { createRouter, createWebHashHistory } from 'vue-router'
import { useStore } from '@/store'

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
        path: '/svgIcon',
        name: 'svgIcon',
        redirect: '',
        component: () => import('@/views/useCase/svgIcon.vue'),
        meta: {
          // activePath: '', // 导航高亮
        }
      },
      {
        path: '/wangEditor',
        name: 'wangEditor',
        redirect: '',
        component: () => import('@/views/useCase/wangEditor.vue'),
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
  // store状态
  const store = useStore()
  // 所有菜单数组
  const allMenus = ['login', '404', ...Object.keys(store.flatMenuBtns)]
  // 首个菜单
  const firstMenuPath = store.firstMenuPath
  // 路由拦截
  if (!store.token && to.path !== '/login') {
    next('/login')
  } else if (!allMenus.includes(to.name)) {
    if (to.path != '/' && to.path != '/404') {
      ElMessage.error('暂无权限访问')
    }
    next(firstMenuPath)
  } else {
    next()
  }
})

export default router
