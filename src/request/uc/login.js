import axios from '../axios.js'

export default {
    // 登录
    login(params) {
        return axios.post('/api/login/account', params)
    },
    // 退出登录
    logout() {
        return axios.post('/api/login/loginOut')
    },
    // 用户菜单
    userMenus() {
        return axios.post('/api/login/userMenus')
    }
}