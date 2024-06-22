import ajax from '../intercept.js'

export default {
  // 登录
  login(data) {
    return ajax.request({
      url: '/api/login',
      method: 'post',
      data,
      timeout: 500
    })
  },
  // 退出登录
  logout() {
    return ajax.request({
      url: '/api/logout',
      method: 'get'
    })
  },
}