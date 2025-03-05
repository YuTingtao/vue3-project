import { defineStore } from 'pinia'
import { arrayToObj, calcFirstMenu } from './utils.js'
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
      return arrayToObj(state.userMenus)
    },
    // 首个菜单
    firstMenu(state) {
      if (state.userMenus.length < 1) {
        return '/login'
      }
      return calcFirstMenu(state.userMenus[0])
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
      setTimeout(() => {
        this.userMenus = routes
      }, 100)
    }
  },
  // 状态持久化
  persist: {
    key: 'store',
    storage: localStorage
  }
})
