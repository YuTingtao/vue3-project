import { createStore } from 'vuex';

const store = createStore({
    state() {
        return {
            token: '',
            userInfo: {},
            userMenus: []
        }
    },
    getters: {
        
    },
    mutations: {
        LOGIN(state, data) {
            state.token = data.token;
            state.userInfo = data.userInfo;
        },
        LOGOUT(state) {
            state.token = '';
            state.userInfo = {};
            state.userMenus = [];
            sessionStorage.removeItem('vuex');
        },
        setUserMenus(state, data) {
            state.userMenus = data;
        }
    },
    actions: {
        
    },
    modules: {
        
    }
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

export default store;