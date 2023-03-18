import { defineStore } from 'pinia'
import baseApi from '@/api/base'
import menuData from '../router/menuData.js'

export const useStore = defineStore('store', {
  state: () => ({
    appVersion: '', // 版本
    token: '',
    userInfo: {}, // 用户信息
    userMenus: [] // 用户菜单
  }),
  getters: {
    // 扁平菜单路径
    flatMenuPaths: (state) => {
      return getFlatPaths(state.userMenus)
    },
    // 首个菜单路径
    firstMenuPath: (state) => {
      return getFirstPath(state.userMenus[0])
    }
  },
  actions: {
    async getAppVersion() {
      let res = await baseApi.getAppVersion()
      if (res.status == 200) {
        this.appVersion = res.data.version
      }
    },
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
      this.userMenus = menuData
    }
  },
  // 状态持久化
  persist: {
    enabled: true,
    strategies: [{
      key: 'store',
      storage: sessionStorage, // 默认 sessionStorage
    }]
  }
})

// 获取菜单扁平路径
function getFlatPaths(menus, res = []) {
  menus.forEach(item => {
    if (item.path) {
      res.push(item.path)
    }
    if (item.children && item.children.length > 0) {
      return getFlatPaths(item.children, res)
    }
  })
  return res
}

// 获取第一个菜单路径
function getFirstPath(menu, path = '/login') {
  if (menu) {
    path = menu.path
    if (menu.children && menu.children.length > 0) {
      return getFirstPath(menu.children[0], path)
    }
  }
  return path
}
