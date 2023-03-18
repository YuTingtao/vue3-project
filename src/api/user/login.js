import ajax from '../intercept.js'

export default {
  // 登录
  login(params) {
    return ajax.post('/api/login/account', params)
  },
  // 退出登录
  logout() {
    return ajax.post('/api/login/loginOut')
  },
  // 用户菜单
  userMenus() {
    return ajax.post('/api/login/userMenus')
  }
}