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
          <el-button class="row-btn" type="primary" :loading="loading" @click="submitForm">登 录</el-button>
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

const loading = ref(false)
// 提交表单
async function submitForm() {
  if (!formRef.value) return
  await formRef.value.validate(valid => {
    if (valid) {
      loading.value = true
      loginApi.login(loginForm.value).then(() => {
        loading.value = false
        handleLogin()
      }).catch(() => {
        loading.value = false
        handleLogin()
      })
    }
  })
}

// 登录
async function handleLogin() {
  store.setLogin({
    token: 'Token-123456789',
    userInfo: { name: 'admin', avatar: '' }
  })
  await store.getUserMenus()
  if (route.query.redirect) {
    router.replace(route.query.redirect)
  } else {
    router.replace('/')
  }
}
</script>

<style lang="scss" scoped>
.login-bg {
  position: relative;
  width: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow-y: auto;
  background: #f2f6fa;
  &::before{
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background: url('@/assets/img/login/bg.jpg') no-repeat 50% 50%;
    background-size: cover;
    filter: brightness(0.6);
  }
}

.login-box {
  position: relative;
  z-index: 1;
  width: 500px;
  box-sizing: border-box;
  padding: 30px;
  background: #fff;
  border-radius: 4px;
  box-shadow: 0 0 10px rgba(0, 0, 0, .1);
  .title {
    text-align: center;
    font-size: 24px;
    font-weight: normal;
    margin: 10px 0 40px 0;
  }
  .el-form-item {
    &:last-child {
      margin-top: 30px;
    }
  }
  :deep(.el-icon) {
    font-size: 16px;
  }
}

:deep(.el-input--large .el-input__prefix) {
  left: 10px;
}

.row-btn {
  width: 100%;
  font-size: 16px;
}
</style>
