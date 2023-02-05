<!-- 全局layout -->
<template>
  <div class="g-header">
    <router-link class="g-logo" to="/">
      <img src="../assets/image/logo.png" alt="" />
      <h2>管理后台</h2>
    </router-link>
    <div class="g-header-right">
      <el-dropdown trigger="hover">
        <div>
          <el-avatar
            :src="userInfo.avatar"
            :size="34"
            icon="UserFilled"
            shape="circle"
            fit="cover">
          </el-avatar>
          <span>{{ userInfo.realName }}</span>
          <el-icon>
            <arrow-down />
          </el-icon>
        </div>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item>用户中心</el-dropdown-item>
            <el-dropdown-item @click="Logout">退出</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </div>
  <div class="g-body">
    <div class="g-aside">
      <el-scrollbar>
        <el-menu :default-active="$route.meta.activePath || $route.path" router>
          <MenuItem :menus="menus"></MenuItem>
        </el-menu>
      </el-scrollbar>
    </div>
    <router-view class="g-page"></router-view>
  </div>
</template>

<script setup>
import { ref, reactive, computed, watch } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { useStore } from '@/store'
import MenuItem from './components/menuItem.vue'

const router = useRouter()
const route = useRoute()
const store = useStore()

// 用户信息
const userInfo = computed(() => store.userInfo)
// 菜单数组
const menus = store.menus

// 退出登录
function Logout() {
  store.setLogout()
  router.replace('/login')
}
</script>

<style lang="scss">
.g-header {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  display: flex;
  align-items: center;
  box-sizing: border-box;
  width: 100%;
  height: 60px;
  padding: 0 20px;
  color: #fff;
  background: var(--el-color-primary);
}

.g-logo {
  display: flex;
  align-items: center;
  margin-right: auto;
  img {
    margin-right: 10px;
    width: 36px;
    height: 36px;
  }
  h2 {
    font-size: 22px;
    font-weight: normal;
  }
}

.g-header-right {
  display: flex;
  align-items: center;
  .el-dropdown {
    color: #fff;
  }
  .el-avatar {
    margin-right: 5px;
  }
  .el-tooltip__trigger {
    cursor: pointer;
    display: flex;
    align-items: center;
  }
}

.g-body {
  box-sizing: border-box;
  height: 100%;
  padding-top: 60px;
  padding-left: 220px;
}

.g-aside {
  position: fixed;
  left: 0;
  top: 60px;
  bottom: 0;
  z-index: 1000;
  width: 220px;
  background: #fff;
  border-right: 1px solid var(--el-border-color);
  .el-menu--vertical {
    border-right: none;
  }
}

.g-page {
  box-sizing: border-box;
  min-height: 100%;
  padding: 20px;
  background: #fff;
}
</style>