import axios from '../axios.js'
import config from '@/config'

const { ucHost } = config

export default {
    // 登录
    Login(params) {
        return axios.post(ucHost + '/login/account', params, {
            headers: {
                'appName': 'resourceCloudAdmin'
            }
        })
    },
    // 退出登录
    Logout() {
        return axios.post(ucHost + '/login/loginOut')
    },
    // 用户菜单
    userMenus() {
        return axios.post(ucHost + '/login/userMenus')
    }
}