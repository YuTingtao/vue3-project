<template>
    <div class="login-bg">
        <div class="login-box">
            <h3>登录</h3>
            <el-form :model="loginForm" ref="formRef" :rules="rules" size="large">
                <el-form-item label="" prop="username">
                    <el-input v-model="loginForm.username" placeholder="请输入账号/手机号/邮箱" prefix-icon="user"></el-input>
                </el-form-item>
                <el-form-item label="" prop="password">
                    <el-input v-model="loginForm.password" placeholder="请输入密码" type="password" prefix-icon="lock"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button class="row-btn" type="primary" @click="submitLogin">登 录</el-button>
                </el-form-item>
            </el-form>
        </div>
    </div>
</template>

<script setup>
import { ref, reactive, toRaw } from 'vue';
import { useRouter, useRoute } from 'vue-router';
import { useStore } from 'vuex';
import loginApi from '@/request/uc/login.js';
import menuData from '@/layout/components/menu-data.js';

const router = useRouter();
const route = useRoute();
const store = useStore();

const formRef = ref();

// 登录参数
const loginForm = reactive({
    username: '',
    password: '',
})

// 校验规则
const rules = reactive({
    username: [{ required: true, message: '请输入账号/手机号/邮箱', trigger: 'blur' }],
    password: [{ required: true, message: '请输入密码', trigger: 'blur' }],
})

// 提交表单
async function submitLogin() {
    if (!formRef.value) return;
    await formRef.value.validate((valid) => {
        if (valid) {
            Login();
        }
    })
}

// 登录
function Login() {
    store.commit('LOGIN', { 
        token: 'Token-123456789', 
        userInfo: { realName: 'admin', facePhoto: '' } 
    });
    store.commit('setUserMenus', menuData);
    removeRoutes(menuData);
    if (route.query.redirect) {
        router.push(route.query.redirect);
    } else {
        router.push('/');
    }
}

// 根据用户菜单移除没有权限的路由
function removeRoutes(menus) {
    const menuNames = flatMenuNames(menus);
    const baseNames = ['layout', 'login']; // 必须存在的路由name
    const removeNames = router.getRoutes().map(item => item.name).filter(item => !baseNames.includes(item));
    removeNames.forEach(item => {
        if (!menuNames.includes(item)) {
            router.removeRoute(item);
        }
    })
}

// 计算扁平化菜单names数组
function flatMenuNames(menus, flats = []) {
    menus.forEach(item => {
        flats.push(item.name);
        if (item.children && item.children.length > 0) {
            flatMenuNames(item.children, flats);
        }
    })
    return flats;
}
</script>

<style lang="scss" scoped>
@import '../../assets/scss/login/login.scss';
</style>