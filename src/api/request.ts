import Axios from 'axios';
import type { AxiosRequestConfig } from 'axios';
import router from '../router';
import { useStore } from '@/store/index.ts';

// message提示
function toast(msg: string) {
  ElMessage.error({
    message: msg,
    duration: 2000,
    grouping: true
  });
}

// 跳到登录页
function toLogin() {
  const currentRoute = router.currentRoute;
  let path = '/login';
  if (currentRoute.value.path != '/login') {
    path = `/login?redirect=${currentRoute.value.fullPath}`;
  }
  router.push(path);
}

const instance = Axios.create({
  baseURL: '/',
  timeout: undefined
});

// 请求拦截
instance.interceptors.request.use(
  config => {
    const store = useStore();
    // Content-Type: application/json、application/x-www-form-urlencoded、multipart/form-data
    config.headers['Content-Type'] = 'application/json';
    if (store.token) {
      config.headers['token'] = store.token;
    }
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

// 相应拦截
instance.interceptors.response.use(
  res => {
    const store = useStore();
    if (res.status === 200) {
      if (res.data instanceof Blob || res.data instanceof ArrayBuffer) {
        return res;
      }
      if (res.data.code !== 200) {
        toast(res.data.msg);
      }
      if (res.data.code === 401) {
        // 需要登录
        store.token = '';
        toLogin();
      }
      return res.data;
    } else {
      return Promise.reject(res.data);
    }
  },
  error => {
    if (error.config?.signal?.aborted) {
      return;
    }
    const store = useStore();
    if (error.response) {
      switch (error.response.status) {
        case 401:
          toast('登录过期，请重新登录');
          store.token = '';
          toLogin();
          break;
        case 404:
          toast('接口地址不存在');
          break;
        default: // 其他错误
          toast('服务器异常');
      }
    } else {
      if (!navigator.onLine) {
        toast('网络异常，请检查您的网络');
      }
    }
    return Promise.reject(error);
  }
);

export interface ResData<T> {
  code: number;
  msg: string;
  data: T;
}

function request<T>(config: AxiosRequestConfig) {
  return instance.request<T, ResData<T>>(config);
}

export default request;
