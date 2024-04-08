// 路由
const routes = [
  {
    path: '/baseCase',
    name: 'baseCase',
    redirect: '',
    component: () => import('@/views/useCase/baseCase/index.vue'),
    meta: {
      active: '', // 建议隐藏的菜单设置高亮的菜单
    }
  },
  {
    path: '/wangEditor',
    name: 'wangEditor',
    redirect: '',
    component: () => import('@/views/useCase/wangEditor/index.vue'),
    meta: {
      active: '', // 建议隐藏的菜单设置高亮的菜单
    },
  }
]

export default routes