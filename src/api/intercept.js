import Axios from 'axios'
import router from '../router'
import { useStore } from '@/store'

// message提示
function toast(msg) {
  ElMessage.closeAll()
  ElMessage.error({
    message: msg,
    duration: 2000
  })
}

// 跳到登录页
function toLogin() {
  const currentRoute = router.currentRoute
  let path = '/login'
  if (currentRoute.value.path != '/login') {
    path = `/login?redirect=${currentRoute.value.fullPath}`
  }
  router.push(path)
}

const axios = Axios.create({
  // baseURL: '',
  // timeout: 10000 // 请求超时 10s
})

// 请求拦截
axios.interceptors.request.use(
  config => {
    const store = useStore()
    config.headers['Content-Type'] = 'application/json' // application/x-www-form-urlencoded、multipart/form-data
    if (store.token) {
      config.headers['token'] = store.token
    }
    return config
  },
  error => {
    return Promise.reject(error)
  }
)

// 相应拦截
axios.interceptors.response.use(
  res => {
    const store = useStore()
    if (res.status == 200) {
      if (res.data instanceof Blob || res.data instanceof ArrayBuffer) {
        return res
      }
      if (res.data.code != '200') {
        toast(res.data.msg)
      }
      if (res.data.code == '000001') { // 需要登录
        store.setLogout()
        toLogin()
      }
      return res.data
    } else {
      return Promise.reject(res.data)
    }
  },
  error => {
    if (error.response) {
      switch (error.response.status) {
        case 404:
          toast('网络请求不存在')
          break
        default: // 其他错误
          toast('网络异常')
      }
      return Promise.reject(error)
    } else {
      if (!navigator.onLine) {
        toast('设备已断开网络')
      }
    }
  }
)

export default axios
