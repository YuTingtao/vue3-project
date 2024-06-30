// 系统设置
export default [
  {
    path: '/system',
    component: () => import('@/layout/ModuleLayout.vue'),
    meta: {
      type: 0,
      title: '系统设置',
      icon: 'setting',
      visible: 1,
      buttons: [],
      activePath: '',
      parentPath: '',
    },
    children: [
      // 菜单设置
      {
        path: '/system/menu',
        component: () => import('@/views/system/menu/index.vue'),
        meta: {
          type: 1,
          title: '菜单设置',
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