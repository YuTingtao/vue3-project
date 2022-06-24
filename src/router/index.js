import { createRouter, createWebHashHistory } from 'vue-router'
import store from '../store'

const routes = [
    {
        path: '/',
        name: 'layout',
        redirect: '/res-list',
        component: () => import('@/layout/index.vue'),
        children: [
            // 素材库
            {
                path: '/res-list',
                name: 'resList',
                component: () => import('@/views/res/list/index.vue'),
            },
            {
                path: '/res-upload',
                name: 'resUpload',
                component: () => import('@/views/res/upload/index.vue'),
            },
            // 课程库
            {
                path: '/course-list',
                name: 'courseList',
                component: () => import('@/views/course/list/index.vue'),
            },
            {
                path: '/course-detail',
                name: 'courseDetail',
                component: () => import('@/views/course/detail/index.vue'),
                meta: {
                    activePath: '/course-list'
                }
            },
        ],
    },
    // 登录
    {
        path: '/login',
        name: 'login',
        component: () => import('@/views/login/login.vue'),
    },
]

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
    if (document.querySelector('.g-main')) {
        document.querySelector('.g-main').scrollIntoView({
            behavior: 'smooth',
        })
    }
})

export default router;
