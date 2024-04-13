// 路由
const routes = [
  {
    path: '/baseCase',
    name: 'baseCase',
    redirect: '',
    component: () => import('@/views/useCase/baseCase/index.vue'),
    meta: {
      active: '', // 设置高亮菜单路径，例如详情页设置列表页高亮
    }
  },
  {
    path: '/wangEditor',
    name: 'wangEditor',
    redirect: '',
    component: () => import('@/views/useCase/wangEditor/index.vue'),
    meta: {
      active: '', // 设置高亮菜单路径，例如详情页设置列表页高亮
    },
  }
]

export default routes