import axios from 'axios'

export default {
  // 获取版本信息
  getAppVersion(params = {}) {
    return axios.request({
      url: '/version.json',
      method: 'GET',
      params
    })
  }
}