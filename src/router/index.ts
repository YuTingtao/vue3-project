import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';
import store from '../store';

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'layout',
        redirect: '/res-list',
        component: () => import(/* webpackChunkName: "layout" */ '@/layout/index.vue'),
        children: [
            // 素材库
            {
                path: '/res-list',
                name: 'resList',
                component: () => import(/* webpackChunkName: "resList" */ '@/views/res/list/index.vue'),
            },
            {
                path: '/res-upload',
                name: 'resUpload',
                component: () => import(/* webpackChunkName: "resUpload" */ '@/views/res/upload/index.vue'),
            },
            // 课程库
            {
                path: '/course-list',
                name: 'courseList',
                component: () => import(/* webpackChunkName: "courseList" */ '@/views/course/list/index.vue'),
            },
            {
                path: '/course-detail',
                name: 'courseDetail',
                component: () => import(/* webpackChunkName: "courseDetail" */ '@/views/course/detail/index.vue'),
            }
        ]
    },
    // 登录
    {
        path: '/login',
        name: 'login',
        component: () => import(/* webpackChunkName: "login" */ '@/views/login/login.vue'),
    },
];

const router = createRouter({
    history: createWebHashHistory(),
    routes,
});

router.beforeEach((to, from, next) => {
    if (to.path !== '/login' && !store.state.token) {
        next('/login?redirect=' + to.fullPath);
    } else {
        next();
    }
})

export default router;
