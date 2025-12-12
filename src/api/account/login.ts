import request from '../request.ts';
import type { LoginReq, LoginRes } from '@/types/account';

// 登录
export function loginApi(data: LoginReq) {
  return request<LoginRes>({
    url: '/api/account/login',
    method: 'post',
    data
  });
}

// 退出登录
export function logoutApi() {
  return request({
    url: '/api/account/logout',
    method: 'get'
  });
}
