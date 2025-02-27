import axios from 'axios';

export default {
  // 列表
  getList(data = {}) {
    return axios.request({
      url: '/api/getList',
      method: 'post',
      data,
    });
  },
};