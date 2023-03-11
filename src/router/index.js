import { createRouter, createWebHashHistory } from 'vue-router'
import { useStore } from '@/store'

const routes = [
  {
    path: '/',
    name: 'index',
    component: () => import('@/layout/index.vue'),
  },
  {
    path: '/useCase',
    name: 'useCase',
    redirect: '/useCase/svgIcon',
    component: () => import('@/layout/index.vue'),
    meta: {
      title: '使用案例',
      icon: 'document',
      hiden: 0, // 是否显示
      // activePath: '', // 导航高亮
    },
    children: [
      {
        path: '/useCase/svgIcon',
        name: 'svgIcon',
        redirect: '',
        component: () => import('@/views/useCase/svgIcon.vue'),
        meta: {
          title: 'svg图表',
          icon: '',
          hiden: 0, // 是否显示
          // activePath: '', // 导航高亮
        },
      },
      {
        path: '/useCase/wangEditor',
        name: 'wangEditor',
        redirect: '',
        component: () => import('@/views/useCase/wangEditor.vue'),
        meta: {
          title: 'wangEditor',
          icon: '',
          hiden: 0, // 是否显示
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
  const store = useStore()
  // 菜单names
  const menuNames = ['login', '404', ...store.menuNames]
  // 首个菜单name
  const firstMenuName = store.firstMenuName
  
  // 路由拦截
  if (!store.token && to.path !== '/login') {
    next('/login')
  } else if (!menuNames.includes(to.name)) {
    if (to.path != '/') {
      ElMessage.error('暂无权限访问')
    }
    next({ name: firstMenuName })
  } else {
    next()
  }
})

export default router
export { routes }
