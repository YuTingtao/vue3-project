import { defineStore } from 'pinia'
import userMenus from '../router/userMenus.js'

export const useStore = defineStore('store', {
  state: () => ({
    token: '',
    userInfo: {}, // 用户信息
    userMenus: [] // 用户菜单
  }),
  getters: {
    // 扁平菜单路径
    flatMenuBtns: (state) => {
      return getFlatMenuBtns(state.userMenus)
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
      storage: sessionStorage, // 默认 sessionStorage
    }]
  }
})

// 获取菜单按钮(多级转为一级)
function getFlatMenuBtns(menus, obj = {}) {
  menus.forEach(item => {
    if (item.name) {
      obj[item.name] = item.buttons || []
    }
    if (item.children && item.children.length > 0) {
      return getFlatMenuBtns(item.children, obj)
    }
  })
  return obj
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
