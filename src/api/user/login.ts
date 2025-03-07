import axios from '../intercept.ts'
import { Response } from '../intercept.ts'
import { LoginData } from './type.ts'

// 登录
interface LoginParams {
  account: string
  password: string
}
export function loginApi(data: LoginParams): Promise<Response<LoginData>> {
  return axios.request({
    url: '/api/user/login',
    method: 'post',
    data,
  })
}

// 退出登录
export function logoutApi(): Promise<Response<any>> {
  return axios.request({
    url: '/api/user/logout',
    method: 'get',
    timeout: 500
  })
}
