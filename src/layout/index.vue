<!-- 全局layout -->
<template>
  <!-- 头部 -->
  <div class="app-head" :style="`left: ${isCollapse ? '64px' : '200px'};`">
    <el-icon class="menu-collapse" @click="toggleCollapse">
      <component :is="isCollapse ? 'Expand' : 'Fold'"></component>
    </el-icon>

    <!-- 面包屑 -->
    <BreadCrumb></BreadCrumb>
    
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
      <div class="app-logo" :class="isCollapse ? 'collapsed' : ''">
        <img class="app-logo-img" src="@/assets/img/logo.png" alt="">
        <span>VUE3后台模板</span>
      </div>
      <el-menu
        :collapse="isCollapse"
        text-color="#fff"
        background-color="#3c4f60"
        :default-active="$route.meta.activePath || $route.path || $route.name">
        <MenuItem v-for="item in userMenus" :key="item.path" :item="item"></MenuItem>
      </el-menu>
    </el-scrollbar>
  </div>

  <!-- 主体 -->
  <div class="app-main" :style="`padding-left: ${isCollapse ? '64px':'200px'};`">
    <!-- 页面主体 -->
    <router-view class="app-view"></router-view>
  </div>
</template>

<script setup name="Layout">
import { ref, reactive, computed, watch } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { useStore } from '@/store'
import MenuItem from './components/MenuItem.vue'
import BreadCrumb from './components/BreadCrumb.vue'
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
  loginApi.logout().finally(() => {
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
  left: 200px;
  right: 0;
  z-index: 100;
  display: flex;
  align-items: center;
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
  .el-breadcrumb {
    margin-left: 12px;
    margin-right: 20px;
  }
  .el-dropdown {
    margin-left: auto;
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
  background: #3c4f60;
  .el-menu--vertical {
    border-right: none;
    &:not(.el-menu--collapse) {
      width: 200px;
    }
  }
}

.app-logo {
  display: flex;
  align-items: center;
  overflow: hidden;
  width: 200px;
  padding: 15px 0;
  color: #fff;
  font-size: 18px;
  white-space: nowrap;
  transition: width 0.3s ease-in-out;
  &.collapsed {
    width: 57px;
  }
}

.app-logo-img {
  width: 30px;
  height: 30px;
  margin-left: 17px;
  margin-right: 10px;
}

// 主体
.app-main {
  box-sizing: border-box;
  padding-left: 200px;
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