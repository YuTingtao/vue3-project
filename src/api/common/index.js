import axios from 'axios'

export default {
  // 配置
  config(data = {}) {
    return axios.request({
      url: '/api/config',
      method: 'post',
      data,
    })
  },
}