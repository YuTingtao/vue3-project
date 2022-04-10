import axios from '../axios.js'
import config from '@/config'

const { ucHost } = config

export default {
    // 登录
    login(params) {
        return axios.post(ucHost + '/login/account', params)
    },
    // 退出登录
    logout() {
        return axios.post(ucHost + '/login/loginOut')
    },
    // 用户菜单
    userMenus() {
        return axios.post(ucHost + '/login/userMenus')
    }
}