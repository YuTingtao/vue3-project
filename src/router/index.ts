import { createRouter, createWebHashHistory, type RouteRecordRaw } from 'vue-router';
import { useStore } from '@/store/index.ts';
import routes from './modules/index.ts';
import { checkUpdate } from '@/utils/checkUpdate.js';

const allRoutes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'layout',
    component: () => import('@/layout/index.vue'),
    children: [
      ...routes,
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/login/index.vue'),
  },
];
const router = createRouter({
  history: createWebHashHistory(),
  routes: allRoutes,
  scrollBehavior(to, from) {
    if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth',
      };
    }
    return {
      top: 0
    };
  }
});

// 不需要鉴权路由names
const notAuthNames = ['layout', 'login'];
// 路由拦截
router.beforeEach((to, from) => {
  const store = useStore();
  // 权限菜单names
  const authNames = Object.keys(store.menuObj);
  
  // 未登录拦截
  if (!store.token && to.path !== '/login') {
    return '/login';
  }
  // 首页跳转
  if (to.path == '/') {
    return store.firstMenu;
  }
  // 权限拦截
  const toName = (to.name || '') as string;
  if (!authNames.includes(toName) && !notAuthNames.includes(toName)) {
    return store.firstMenu;
  }
});

router.onError((error) => {
  console.error(error);
  checkUpdate(); // 检测更新
});

export default router;
