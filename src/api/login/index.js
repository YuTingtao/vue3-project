import axios from '../intercept.js'

export default {
  // 登录
  login(data) {
    return axios.request({
      url: '/api/login',
      method: 'post',
      data,
      timeout: 500
    })
  },
  // 退出登录
  logout() {
    return axios.request({
      url: '/api/logout',
      method: 'get'
    })
  },
}