import { createStore } from 'vuex';
import router from '../router';
import dataDic from './modules/dataDic.js'
import menuData from '@/layout/components/menu-data.js';

const store = createStore({
    state() {
        return {
            token: '',
            userInfo: {},
            userMenus: [],
        };
    },
    getters: {},
    mutations: {
        LOGIN(state, data) {
            state.token = data.token;
            state.userInfo = data.userInfo;
        },
        LOGOUT(state) {
            state.token = "";
            state.userInfo = {};
            state.userMenus = [];
            sessionStorage.removeItem("vuex");
        },
        setMenus(state, data) {
            state.userMenus = data;
        },
    },
    actions: {
        getMenus({ commit }) {
            commit("setMenus", menuData);
            filterRoutes(menuData);
        },
    },
    modules: {
        dataDic,
    },
});

// 防止vuex刷新失效
if (/iphone|ipad|ipod/.test(navigator.userAgent)) {
    window.addEventListener('pagehide', () => {
        sessionStorage.vuex = JSON.stringify(store.state);
    });
} else {
    window.addEventListener('beforeunload', () => {
        sessionStorage.vuex = JSON.stringify(store.state);
    });
}
if (sessionStorage.vuex) {
    store.replaceState(
        Object.assign({}, store.state, JSON.parse(sessionStorage.vuex))
    );
}

// 根据用户菜单移除没有权限的路由
function filterRoutes(menus) {
    const menuNames = flatMenuNames(menus);
    const baseNames = ['layout', 'login']; // 必须存在的路由name
    const removeNames = router.getRoutes().map(item => item.name).filter(item => !baseNames.includes(item));
    removeNames.forEach(item => {
        if (!menuNames.includes(item)) {
            router.removeRoute(item);
        }
    })
}

// 计算扁平化菜单names数组
function flatMenuNames(menus, names = []) {
    menus.forEach(item => {
        names.push(item.name);
        if (item.children && item.children.length > 0) {
            flatMenuNames(item.children, names);
        }
    })
    return names;
}

export default store;
