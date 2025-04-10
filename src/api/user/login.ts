import axios, { type Res } from '../intercept.ts';
import type { LoginReq, LoginRes } from './type.ts';

export default {
  // 登录
  login(data: LoginReq): Promise<Res<LoginRes>> {
    return axios.request({
      url: '/api/user/login',
      method: 'post',
      data
    });
  },

  // 退出登录
  logout() {
    return axios.request({
      url: '/api/user/logout',
      method: 'get',
      timeout: 500
    });
  }
};
