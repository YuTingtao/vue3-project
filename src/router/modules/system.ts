// 系统设置
export default [
  {
    path: '/system',
    component: () => import('@/layouts/AppRouterView.vue'),
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
        component: () => import('@/views/system/menu/list/MenuList.vue'),
        meta: {
          title: '菜单设置',
          icon: '',
          visible: 1,
          buttons: [],
          activePath: '',
          parentPath: ''
        }
      },
      // 菜单设置-详情
      {
        path: '/system/menu/:id(\\d+)',
        name: 'system-menu-detail',
        component: () => import('@/views/system/menu/detail/MenuDetail.vue'),
        meta: {
          title: '菜单详情',
          icon: '',
          visible: 0,
          buttons: [],
          activePath: '/system/menu',
          parentPath: '/system/menu'
        }
      }
    ]
  }
];
