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
  }
]

export default routes