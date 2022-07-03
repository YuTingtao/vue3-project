import { createRouter, createWebHashHistory } from 'vue-router'
import store from '../store'

const routes = [
    {
        path: '/',
        name: 'layout',
        redirect: (to) => {
            let path = '/login';
            if (store.state.menus.length > 0) {
                path = store.state.menus[0].children[0]?.path || store.state.menus[0].redirect;
            }
            return { path: path };
        },
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
})

router.beforeEach((to, from, next) => {
    if (to.path !== '/login' && !store.state.token) {
        next('/login?redirect=' + to.fullPath);
    } else {
        next();
    }
})

router.afterEach((to, from, failure) => {
    if (document.querySelector('.g-body')) {
        document.querySelector('.g-body').scrollIntoView({
            behavior: 'smooth',
        });
    }
})

export default router;
