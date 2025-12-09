import type { RouteRecordRaw } from 'vue-router';

// 用户管理
const system: RouteRecordRaw[] = [
  {
    path: '/user',
    meta: {
      title: '用户模块',
      icon: 'user'
    },
    children: [
      // 菜单
      {
        path: '/user/menu',
        component: () => import('@/views/user/menu/list/MenuList.vue'),
        meta: {
          title: '菜单管理'
        }
      },
      // 菜单-详情
      {
        path: '/system/menu/:id(\\d+)',
        name: 'systemMenuDetail',
        component: () => import('@/views/user/menu/detail/MenuDetail.vue'),
        meta: {
          title: '菜单详情',
          hidden: 0,
          activePath: '/system/menu',
          parentPath: '/system/menu'
        }
      }
    ]
  }
];

export default system;
