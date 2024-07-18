// 使用案例
export default [
  {
    path: '/useCase',
    component: () => import('@/layout/ModuleLayout.vue'),
    meta: {
      type: 0, // 类型 0:模块，1:菜单
      title: '使用案例', // 标题
      icon: 'document', // 图标
      visible: 1, // 是否可见
      buttons: [], // 按钮权限
      activePath: '', // 设置高亮菜单路径，例如详情页设置列表页高亮
      parentPath: '', // 设置面包屑父级路径
    },
    children: [
    // 基础案例
      {
        path: '/useCase/base',
        component: () => import('@/views/useCase/base/index.vue'),
        meta: {
          type: 1,
          title: '基础案例',
          icon: '',
          visible: 1,
          buttons: ['add', 'edit', 'delete'], // 按钮权限
          activePath: '',
          parentPath: '',
        }
      },
      // 画板/白板
      {
        path: '/useCase/whiteBoard',
        component: () => import('@/views/useCase/whiteBoard/index.vue'),
        meta: {
          type: 1,
          title: '画板/白板',
          icon: '',
          visible: 1,
          buttons: [],
          activePath: '',
          parentPath: '',
        },
      },
      // 富文本编辑
      {
        path: '/useCase/wangEditor',
        component: () => import('@/views/useCase/wangEditor/index.vue'),
        meta: {
          type: 1,
          title: '富文本编辑',
          icon: '',
          visible: 1,
          buttons: [],
          activePath: '',
          parentPath: '',
        },
      },
    ]
  }
]
