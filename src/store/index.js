import { createStore } from 'vuex'
import dataDic from './modules/dataDic.js'
import menuData from '../router/menuData.js'

const store = createStore({
    state() {
        return {
            token: '',
            userInfo: {},
            menus: [] // 菜单
        }
    },
    getters: {
        // 扁平菜单路径
        menuPaths(state) {
            return getFlatPaths(state.menus)
        },
        // 首个菜单路径
        firstMenuPath(state) {
            let res = '/login'
            if (state.menus.length > 0) {
                let item = state.menus[0]
                res = item.redirect || item.path
                if (item.children && item.children.length > 0) {
                    res = item.children[0].redirect || item.children[0].path
                }
            }
            return res
        }
    },
    mutations: {
        // 登录
        setLogin(state, data) {
            state.token = data.token
            state.userInfo = data.userInfo
            sessionStorage.vuex = state
        },
        // 退出登录
        setLogout(state) {
            state.token = ''
            state.userInfo = {}
            state.menus = []
            sessionStorage.removeItem('vuex')
        },
        // 设置菜单
        setMenus(state, data) {
            state.menus = data
        }
    },
    actions: {
        // 获取菜单
        getMenus({ commit }) {
            commit('setMenus', menuData)
        }
    },
    modules: {
        dataDic // 数据字典
    }
})

// 获取菜单扁平路径
function getFlatPaths(menus, res = []) {
    menus.forEach(item => {
        if (item.path) {
            res.push(item.path)
        }
        if (item.children && item.children.length > 0) {
            getFlatPaths(item.children, res)
        }
    })
    return res
}

// 防止vuex刷新失效
window.addEventListener('beforeunload', () => {
    sessionStorage.vuex = JSON.stringify(store.state)
})
if (/iphone|ipad|ipod/.test(navigator.userAgent)) {
    window.addEventListener('pagehide', () => {
        sessionStorage.vuex = JSON.stringify(store.state)
    })
}
if (sessionStorage.vuex) {
    store.replaceState(Object.assign({}, store.state, JSON.parse(sessionStorage.vuex)))
}

export default store
