import { defineStore } from 'pinia'
import { getMenuObj, getFirstPath } from './utils.js'
import userMenus from '../router/userMenus.js'

export const useStore = defineStore('store', {
  state: () => ({
    token: '',
    userInfo: {}, // 用户信息
    userMenus: [] // 用户菜单树
  }),
  getters: {
    // 菜单对象: key为path, value为{ name: '', buttons: [] }
    menuObj: (state) => {
      return getMenuObj(state.userMenus)
    },
    // 首个路径
    firstPath: (state) => {
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
