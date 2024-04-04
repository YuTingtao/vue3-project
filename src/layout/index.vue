<!-- 全局layout -->
<template>
  <!-- 头部 -->
  <div class="app-head" :style="`left: ${isCollapse ? '64px' : '220px'};`">
    <el-icon class="menu-collapse" @click="toggleCollapse">
      <component :is="isCollapse ? 'Expand' : 'Fold'"></component>
    </el-icon>
    
    <el-dropdown trigger="hover">
      <div>
        <el-avatar
          :src="userInfo.avatar"
          :size="32"
          icon="UserFilled"
          shape="circle"
          fit="cover">
        </el-avatar>
        <span>{{ userInfo.name }}</span>
        <el-icon><arrow-down /></el-icon>
      </div>

      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item @click="handleLogout">退出</el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
  </div>

  <!-- 侧边菜单 -->
  <div class="app-aside">
    <el-scrollbar>
      <el-menu
        router
        :collapse="isCollapse"
        text-color="#fff"
        background-color="#565a5e"
        :default-active="$route.meta.activePath || $route.path">
        <MenuItem v-for="item in userMenus" :key="item.name" :item="item"></MenuItem>
      </el-menu>
    </el-scrollbar>
  </div>

  <!-- 主体 -->
  <div class="app-main" :style="`padding-left: ${isCollapse ? '64px':'220px'};`">
    <!-- 页面主体 -->
    <router-view class="app-view"></router-view>
  </div>
</template>

<script setup>
import { ref, reactive, computed } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { useStore } from '@/store'
import MenuItem from './components/MenuItem.vue'
import loginApi from '@/api/user/login.js'

const router = useRouter()
const route = useRoute()
const store = useStore()

// 用户信息
const userInfo = computed(() => store.userInfo)

// 用户菜单
const userMenus = computed(() => store.userMenus)

// 菜单展开收起
const isCollapse = ref(false)
function toggleCollapse() {
  isCollapse.value = !isCollapse.value
}

// 退出登录
function handleLogout() {
  loginApi.logout().then(res => {
    store.setLogout()
    router.replace('/login')
  }).catch(err => {
    store.setLogout()
    router.replace('/login')
  })
}
</script>

<style lang="scss">
// 头部
.app-head {
  position: fixed;
  top: 0;
  left: 220px;
  right: 0;
  z-index: 100;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-sizing: border-box;
  height: 56px;
  padding: 0 20px;
  color: #333;
  background: #fff;
  border-bottom: 1px solid var(--el-border-color-extra-light);
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.04);
  transition: left var(--el-transition-duration) ease-in-out;
  .menu-collapse {
    font-size: 18px;
    color: #333;
    cursor: pointer;
  }
  .el-dropdown {
    display: flex;
    align-items: center;
    .el-avatar {
      margin-right: 5px;
    }
    .el-tooltip__trigger {
      display: flex;
      align-items: center;
      cursor: pointer;
    }
  }
}

// 侧边菜单
.app-aside {
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  z-index: 110;
  background: #565a5e;
  .el-menu--vertical {
    border-right: none;
    &:not(.el-menu--collapse) {
      width: 220px;
    }
  }
  .el-menu {
    --text-color: #fff;
    --bg-color: #565a5e;
    background-color: transparent;
  }
}

// 主体
.app-main {
  box-sizing: border-box;
  padding-left: 220px;
  padding-top: 56px;
  min-height: 100%;
  background: #fff;
  transition: padding-left var(--el-transition-duration) ease-in-out;
}

.app-view {
  box-sizing: border-box;
  min-height: 100%;
  margin: 20px;
}
</style>