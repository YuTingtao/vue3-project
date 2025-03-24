import axios from '../intercept.ts';
import { Response } from '../intercept.ts';
import type { LoginParams, LoginData } from './types.ts';

export default {
  // 登录
  login(data: LoginParams): Promise<Response<LoginData>> {
    return axios.request({
      url: '/api/user/login',
      method: 'post',
      data,
    });
  },

  // 退出登录
  logout(): Promise<Response<any>> {
    return axios.request({
      url: '/api/user/logout',
      method: 'get',
      timeout: 500
    });
  }
};
