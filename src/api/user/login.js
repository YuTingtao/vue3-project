import ajax from '../intercept.js'

export default {
  // 登录
  login(data) {
    return ajax.request({
      url: '/api/user/login',
      method: 'post',
      data,
      timeout: 500
    })
  },
  // 退出登录
  logout() {
    return ajax.request({
      url: '/api/user/logout',
      method: 'get'
    })
  },
  // 用户菜单
  userMenus() {
    return ajax.request({
      url: '/api/user/userMenus',
      method: 'get'
    })
  }
}