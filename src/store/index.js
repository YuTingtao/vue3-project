import { defineStore } from 'pinia'
import { getFlatMenus, getFirstPath } from './utils.js'
import userMenus from '../router/userMenus.js'

export const useStore = defineStore('store', {
  state: () => ({
    token: '',
    userInfo: {}, // 用户信息
    userMenus: [] // 用户菜单
  }),
  getters: {
    // 扁平菜单路径
    flatMenus: (state) => {
      return getFlatMenus(state.userMenus)
    },
    // 首个菜单路径
    firstMenuPath: (state) => {
      return getFirstPath(state.userMenus[0])
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
      this.userMenus = userMenus
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
