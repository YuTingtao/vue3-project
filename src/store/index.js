import { defineStore } from 'pinia'
import menuData from '../router/menuData.js'

export const useStore = defineStore('store', {
  state: () => ({
    token: '',
    userInfo: {}, // 用户信息
    userMenus: [] // 用户菜单
  }),
  getters: {
    // 扁平菜单路径
    menuNames: (state) => {
      return getFlatNames(state.userMenus)
    },
    // 首个菜单路径
    firstMenuName: (state) => {
      let name = 'login'
      if (state.userMenus.length > 0) {
        name = state.userMenus[0].name
      }
      return name
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
function getFlatNames(menus, res = []) {
  menus.forEach(item => {
    if (item.name) {
      res.push(item.name)
    }
    if (item.children && item.children.length > 0) {
      getFlatNames(item.children, res)
    }
  })
  return res
}
