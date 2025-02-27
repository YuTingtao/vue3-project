import { createRouter, createWebHashHistory, createWebHistory } from 'vue-router';
import { useStore } from '@/store';
import routes from './modules/index.js';
import { checkUpdate } from '@/utils/checkUpdate.js';

const allRoutes = [
  {
    path: '/',
    name: 'layout',
    component: () => import('@/views/layout/index.vue'),
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
  scrollBehavior(to, from, savedPosition) {
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
  if (!authNames.includes(to.name) && !notAuthNames.includes(to.name)) {
    return store.firstMenu;
  }
});

router.onError((error) => {
  console.error(error);
  checkUpdate(); // 检测更新
});

export default router;
