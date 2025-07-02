// 使用案例
export default [
  {
    path: '/example',
    component: () => import('@/layout/RouteView.vue'),
    meta: {
      title: '使用案例', // 标题
      icon: 'document', // 图标
      visible: 1, // 是否可见
      buttons: [], // 按钮权限
      activePath: '', // 设置高亮菜单路径，例如详情页设置列表页高亮
      parentPath: '' // 设置面包屑父级路径
    },
    children: [
      // 基础案例
      {
        path: '/example/base',
        component: () => import('@/views/example/base/index.vue'),
        meta: {
          title: '基础案例',
          icon: '',
          visible: 1,
          buttons: [
            { name: 'add', title: '新增' },
            { name: 'edit', title: '编辑' },
            { name: 'delete', title: '删除' }
          ], // 按钮权限
          activePath: '',
          parentPath: ''
        }
      },
      // 画板/白板
      {
        path: '/example/whiteBoard',
        component: () => import('@/views/example/whiteBoard/index.vue'),
        meta: {
          title: '画板/白板',
          icon: '',
          visible: 1,
          buttons: [],
          activePath: '',
          parentPath: ''
        }
      }
    ]
  }
];
