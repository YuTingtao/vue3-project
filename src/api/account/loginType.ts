// 登录入参
export interface LoginReq {
  account: string;
  password: string;
}

// 用户信息
export interface UserInfo {
  id: string | number;
  name: string;
  avatar: string;
}

// 登录返回数据
export interface LoginRes extends UserInfo {
  token: string;
}
