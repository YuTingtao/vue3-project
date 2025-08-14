import { createRouter, createWebHashHistory, type RouteRecordRaw } from 'vue-router';
import { useStore } from '@/store/index.ts';
import routes from './modules/index.ts';
import { checkUpdate } from '@/utils/checkUpdate.js';

const allRoutes: Array<RouteRecordRaw> = [
  {
    path: '/',
    component: () => import('@/layout/AppLayout.vue'),
    children: [...routes]
  },
  {
    path: '/login',
    component: () => import('@/views/login/UserLogin.vue')
  }
];
const router = createRouter({
  history: createWebHashHistory(),
  routes: allRoutes,
  scrollBehavior(to, from) {
    if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth'
      };
    }
    return {
      top: 0
    };
  }
});

// 路由拦截
router.beforeEach((to, from) => {
  const store = useStore();
  // 基础路由+权限菜单 keys
  const allRouteKeys = ['/', '/login', ...Object.keys(store.menuObj)];

  // 未登录拦截
  if (!store.token && to.path !== '/login') {
    return '/login';
  }
  // 首页跳转
  if (to.path == '/') {
    return store.firstMenu;
  }
  // 权限拦截
  const toKey = (to.name || to.path) as string;
  if (!allRouteKeys.includes(toKey)) {
    return store.firstMenu;
  }
});

router.onError(error => {
  // eslint-disable-next-line no-console
  console.error(error);
  checkUpdate(); // 检测更新
});

export default router;
