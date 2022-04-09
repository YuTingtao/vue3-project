import Axios from 'axios';
import store from '../store'
import router from '../router'

const toast = function(msg) {
    ElMessage.closeAll();
    ElMessage.error({
        message: msg,
        duration: 2000
    });
}

const toLogin = function() {
    router.replace({
        path: '/login',
        query: {
            redirect: router.currentRoute.fullPath
        }
    });
}

const axios = Axios.create({
    // baseURL: '',
    timeout: 10000, // 请求超时 10s
});

// 请求拦截
axios.interceptors.request.use(
    config => {
        if (store.state.token) {
            config.headers['token'] = store.state.token;
        }
        return config;
    },
    error => {
        return Promise.error(error);
    }
);

// 相应拦截
axios.interceptors.response.use(
    res => {
        if (res.status === 200) {
            if (res.data instanceof Blob || res.data instanceof ArrayBuffer) {
                return res;
            }
            // 请求不成功，提示错误信息
            if (res.data.code != '000000') {
                toast(res.data.msg);
            }
            // 需要登录
            if (res.data.code == '000001') {
                toLogin();
            }
            return res.data;
        } else {
            return Promise.reject(res);
        }
    },
    error => {
        if (error.response) {
            switch (error.response.status) {
                case 401: // 401: 未登录
                    toLogin();
                    break;
                case 403: // 403 token过期
                    toast('登录过期，请重新登录')
                    store.commit('LOGOUT');
                    toLogin();
                    break;
                case 404: // 404请求不存在
                    toast('网络请求不存在');
                    break;
                default: // 其他错误
                    toast('网络请求错误');
            }
            return Promise.reject(error);
        } else {
            if (!navigator.onLine) {
                toast('网络已断开，请检查网络');
            }
        }
    }
);

export default axios;
