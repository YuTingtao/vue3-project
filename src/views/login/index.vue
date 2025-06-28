<template>
  <div class="login-page">
    <div class="login-box">
      <h3 class="title">欢迎登录</h3>

      <!-- 表单 -->
      <el-form :model="loginForm" ref="formRef" :rules="rules" size="large">
        <el-form-item label="" prop="account">
          <el-input v-model="loginForm.account" placeholder="请输入账号/手机号/邮箱" prefix-icon="user"> </el-input>
        </el-form-item>

        <el-form-item label="" prop="password">
          <el-input v-model="loginForm.password" placeholder="请输入密码" type="password" prefix-icon="lock">
          </el-input>
        </el-form-item>

        <el-form-item>
          <el-button class="row-btn" type="primary" :loading="loading" @click="onSubmit">登 录</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script setup lang="ts" name="Login">
import { ref, reactive } from 'vue';
import { useRouter, useRoute } from 'vue-router';
import { useStore } from '@/store/index.ts';
import loginApi from '@/api/user/login.ts';

const router = useRouter();
const route = useRoute();
const store = useStore();

const formRef = ref();

// 登录参数
const loginForm = ref({
  account: 'admin',
  password: '123456'
});

// 校验规则
const rules = reactive({
  account: [{ required: true, message: '请输入账号/手机号/邮箱', trigger: 'blur' }],
  password: [{ required: true, message: '请输入密码', trigger: 'blur' }]
});

const loading = ref(false);
// 提交表单
async function onSubmit() {
  await formRef.value?.validate((valid: any) => {
    if (loading.value) return;
    if (!valid) return;
    loading.value = true;
    loginApi
      .login(loginForm.value)
      .then(res => {
        if (res.code === 200) {
          loading.value = false;
          loginSuccess();
        }
      })
      .catch(() => {
        loading.value = false;
        loginSuccess();
      });
  });
}

// 登录成功
async function loginSuccess() {
  store.setLogin({
    id: 1,
    token: 'Token-123456789',
    userName: 'admin',
    avatar: ''
  });
  await store.getUserMenus();
  if (route.query.redirect) {
    router.replace(route.query.redirect as string);
  } else {
    router.replace('/');
  }
}
</script>

<style lang="scss" scoped>
.login-page {
  width: 100%;
  min-height: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  background: url('@/assets/img/login/login-bg.jpg') no-repeat;
  background-size: cover;
}

.login-box {
  box-sizing: border-box;
  width: 480px;
  padding: 30px;
  margin: 0 14%;
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 0 12px rgba(0, 0, 0, 0.15);

  .title {
    margin-bottom: 40px;
    text-align: center;
    font-size: 24px;
    font-weight: normal;
    color: var(--el-color-primary);
  }

  .el-form-item {
    &:last-child {
      margin-top: 40px;
      margin-bottom: 0;
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

@media (max-width: 950px) {
  .login-page {
    justify-content: center;
  }

  .login-box {
    margin: 0 4%;
  }
}
</style>
