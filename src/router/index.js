import { createRouter, createWebHashHistory } from 'vue-router'
import store from '../store'

const routes = [
    {
        path: '/',
        name: 'layout',
        redirect: '/index',
        component: () => import('@/layout/index.vue'),
        children: [
            {
                path: '/svgIcon',
                name: 'svgIcon',
                component: () => import('@/views/useCase/svgIcon.vue'),
                meta: {
                    // activePath: '', // 导航高亮
                },
            },
            {
                path: '/wangEditor',
                name: 'wangEditor',
                component: () => import('@/views/useCase/wangEditor.vue'),
            },
        ],
    },
    // 登录
    {
        path: '/login',
        name: 'login',
        component: () => import('@/views/login/login.vue'),
    },
];

const router = createRouter({
    history: createWebHashHistory(),
    routes,
    scrollBehavior(to, from, savedPosition) {
        return {
            // el: document.querySelector('.g-body'),
            top: 0,
        };
    },
})

router.beforeEach((to, from, next) => {
    if (!store.state.token && to.path !== '/login') {
        next('/login');
    } else {
        next();
    }
})

export default router;
