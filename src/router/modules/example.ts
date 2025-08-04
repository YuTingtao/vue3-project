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
      // 公共组件
      {
        path: '/example/baseComponent',
        component: () => import('@/views/example/BaseComponent.vue'),
        meta: {
          title: '公共组件',
          icon: '',
          visible: 1,
          buttons: [],
          activePath: '',
          parentPath: ''
        }
      },
      // 自定义指令
      {
        path: '/example/CustomDirective',
        component: () => import('@/views/example/CustomDirective.vue'),
        meta: {
          title: '自定义指令',
          icon: '',
          visible: 1,
          buttons: [],
          activePath: '',
          parentPath: ''
        }
      },
      // 按钮权限
      {
        path: '/example/buttonPermission',
        component: () => import('@/views/example/ButtonPermission.vue'),
        meta: {
          title: '按钮权限',
          icon: '',
          visible: 1,
          buttons: [
            { name: 'add', title: '新增' },
            { name: 'edit', title: '编辑' },
            { name: 'delete', title: '删除' }
          ],
          activePath: '',
          parentPath: ''
        }
      }
    ]
  }
];
