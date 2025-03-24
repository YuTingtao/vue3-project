// 用户信息
export interface UserInfo {
  id: string | number
  userName: string
  avatar: string
}

// 登录入参
export interface LoginParams {
  account: string
  password: string
}

// 登录返回数据
export interface LoginData extends UserInfo {
  token: string
}