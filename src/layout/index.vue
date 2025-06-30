<!-- 全局layout -->
<template>
  <!-- 头部 -->
  <div class="app-head" :style="`left: ${appStore.menu.isExpand ? '210px' : '64px'};`">
    <svg-icon class="menu-collapse" :name="appStore.menu.isExpand ? 'fold' : 'expand'" @click="toggleCollapse">
    </svg-icon>

    <!-- 面包屑 -->
    <BreadCrumb></BreadCrumb>

    <el-dropdown trigger="hover">
      <div class="app-avatar-dropdown">
        <el-avatar :src="userInfo.avatar" :size="32">
          <svg-icon name="avatar"></svg-icon>
        </el-avatar>
        <span>{{ userInfo.userName }}</span>
        <svg-icon name="arrow-down"></svg-icon>
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
      <div class="app-logo" :class="appStore.menu.isExpand ? '' : 'collapsed'">
        <img class="app-logo-img" src="@/assets/img/logo.png" alt="" />
        <span>Vue3管理后台</span>
      </div>
      <el-menu
        :collapse="!appStore.menu.isExpand"
        :unique-opened="true"
        :default-active="route.meta.activePath || route.path || route.name">
        <MenuItem v-for="item in userMenus" :key="item.path" :item="item"> </MenuItem>
      </el-menu>
    </el-scrollbar>
  </div>

  <!-- 主体 -->
  <div class="app-main" :style="`padding-left: ${appStore.menu.isExpand ? '210px' : '64px'};`">
    <!-- 页面主体 -->
    <router-view class="app-view"></router-view>
  </div>
</template>

<script setup lang="ts" name="Layout">
import { ref, reactive, computed } from 'vue';
import { useRouter, useRoute } from 'vue-router';
import { useStore } from '@/store/index.ts';
import { useAppStore } from '@/store/app.ts';
import MenuItem from './components/MenuItem.vue';
import BreadCrumb from './components/BreadCrumb.vue';
import loginApi from '@/api/user/login.js';

const router = useRouter();
const route = useRoute();
const store = useStore();
const appStore = useAppStore();

// 用户信息
const userInfo = computed(() => store.userInfo);

// 用户菜单
const userMenus = computed(() => store.userMenus);

// 菜单展开收起
function toggleCollapse() {
  appStore.menu.isExpand = !appStore.menu.isExpand;
}

// 退出登录
function handleLogout() {
  loginApi.logout().finally(() => {
    store.setLogout();
    router.push('/login');
  });
}
</script>

<style lang="scss">
// 头部
.app-head {
  position: fixed;
  top: 0;
  left: 210px;
  right: 0;
  z-index: 10;
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
    flex-shrink: 0;
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
  --el-menu-bg-color: #36415e;
  --el-menu-hover-bg-color: #404d70;
  --el-menu-text-color: #fff;
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  z-index: 10;
  background: var(--el-menu-bg-color);

  .el-menu--vertical {
    border-right: none;

    &:not(.el-menu--collapse) {
      width: 210px;
    }
  }

  .el-menu--vertical:not(.el-menu--collapse):not(.el-menu--popup-container) .el-menu-item {
    padding-left: calc(var(--el-menu-base-level-padding) + var(--el-menu-level) * var(--el-menu-level-padding) + 9px);
  }
}

.app-logo {
  position: sticky;
  top: 0;
  z-index: 1;
  display: flex;
  align-items: center;
  overflow: hidden;
  width: 210px;
  padding: 15px 0;
  background: var(--el-menu-bg-color);
  color: #fff;
  font-size: 16px;
  font-weight: bolder;
  white-space: nowrap;
  transition: width 0.3s ease-in-out;

  &.collapsed {
    width: 44px;
  }
}

.app-logo-img {
  width: 24px;
  height: 24px;
  margin-left: 20px;
  margin-right: 10px;
}

.app-avatar-dropdown {
  .el-avatar {
    font-size: 18px;
  }
}

// 主体
.app-main {
  box-sizing: border-box;
  padding-left: 210px;
  padding-top: 56px;
  height: 100%;
  background: #fff;
  transition: padding-left var(--el-transition-duration) ease-in-out;
}

.app-view {
  box-sizing: border-box;
  min-height: 100%;
  padding: 20px;
}
</style>
