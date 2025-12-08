import request from '../request.ts';
import type { LoginReq, LoginRes } from '@/types/account';

// 登录
export function loginApi(data: LoginReq) {
  return request<LoginRes>({
    url: '/api/user/login',
    method: 'post',
    data
  });
}

// 退出登录
export function logoutApi() {
  return request({
    url: '/api/user/logout',
    method: 'get',
    timeout: 500
  });
}
