<template>
  <div class="login-bg">
    <div class="login-box">
      <h3 class="title">登录系统</h3>

      <!-- 表单 -->
      <el-form :model="loginForm" ref="formRef" :rules="rules" size="large">
        <el-form-item label="" prop="userName">
          <el-input
            v-model="loginForm.userName"
            placeholder="请输入账号/手机号/邮箱"
            prefix-icon="user">
          </el-input>
        </el-form-item>

        <el-form-item label="" prop="password">
          <el-input
            v-model="loginForm.password"
            placeholder="请输入密码"
            type="password"
            prefix-icon="lock">
          </el-input>
        </el-form-item>

        <el-form-item>
          <el-button class="row-btn" type="primary" @click="submitForm">登 录</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive, toRaw } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { useStore } from '@/store'
import loginApi from '@/api/user/login.js'

const router = useRouter()
const route = useRoute()
const store = useStore()

const formRef = ref()

// 登录参数
const loginForm = ref({
  userName: 'admin',
  password: '123456'
})

// 校验规则
const rules = reactive({
  userName: [{ required: true, message: '请输入账号/手机号/邮箱', trigger: 'blur' }],
  password: [{ required: true, message: '请输入密码', trigger: 'blur' }]
})

// 提交表单
async function submitForm() {
  if (!formRef.value) return
  await formRef.value.validate(valid => {
    if (valid) {
      handleLogin()
    }
  })
}

// 登录
async function handleLogin() {
  store.setLogin({
    token: 'Token-123456789',
    userInfo: { realName: 'admin', avatar: '' }
  })
  await store.getMenus()
  if (route.query.redirect) {
    router.replace(route.query.redirect)
  } else {
    router.replace('/')
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/login/login.scss';
</style>
