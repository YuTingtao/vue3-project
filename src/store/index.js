import { defineStore } from 'pinia'
import menuData from '../router/menuData.js'

export const useStore = defineStore('store', {
  state: () => ({
    token: '',
    userInfo: {},
    menus: [] // 菜单
  }),
  getters: {
    // 扁平菜单路径
    menuPaths: (state) => {
      return getFlatPaths(state.menus)
    },
    // 首个菜单路径
    firstMenuPath: (state) => {
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
    getMenus() {
      this.menus = menuData
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
      getFlatPaths(item.children, res)
    }
  })
  return res
}
