// 系统设置
export default [
  {
    path: '/system',
    component: () => import('@/layout/RouteView.vue'),
    meta: {
      title: '系统设置',
      icon: 'setting',
      visible: 1,
      buttons: [],
      activePath: '',
      parentPath: ''
    },
    children: [
      // 菜单设置
      {
        path: '/system/menu',
        component: () => import('@/views/system/menu/index.vue'),
        meta: {
          title: '菜单设置',
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
