import { defineStore } from 'pinia'
import { getMenuObj, getFirstMenu } from './utils.js'
import routes from '@/router/modules/index.js'

export const useStore = defineStore('store', {
  state: () => ({
    token: '',
    userInfo: {}, // 用户信息
    userMenus: [], // 用户菜单
  }),
  getters: {
    // 菜单对象: key为path
    menuObj(state) {
      return getMenuObj(state.userMenus)
    },
    // 首个菜单
    firstMenu(state) {
      if (state.userMenus.length < 1) {
        return '/login'
      }
      return getFirstMenu(state.userMenus[0])
    }
  },
  actions: {
    // 登录
    setLogin(obj) {
      this.token = obj.token
      this.userInfo = obj.userInfo
    },
    // 退出登录
    setLogout() {
      this.token = ''
      this.userInfo = {}
    },
    // 获取菜单
    getUserMenus() {
      return new Promise((resolve, reject) => {
        // 执行完异步后resolve
        this.userMenus = routes
        resolve()
      })
    }
  },
  // 状态持久化
  persist: {
    enabled: true,
    strategies: [{
      key: 'store',
      storage: sessionStorage
    }]
  }
})
