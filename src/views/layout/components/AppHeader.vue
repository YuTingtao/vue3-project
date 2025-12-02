<template>
  <div class="app-header" :style="`left: ${store.isExpand ? '210px' : '64px'};`">
    <svg-icon class="menu-collapse" :icon="store.isExpand ? 'fold' : 'expand'" @click="toggleCollapse"></svg-icon>

    <!-- 面包屑 -->
    <BreadCrumb></BreadCrumb>

    <el-dropdown trigger="hover">
      <div class="app-header-avatar">
        <el-avatar :src="userInfo.avatar" :size="32">
          <svg-icon icon="avatar-filled"></svg-icon>
        </el-avatar>
        <span>{{ userInfo.userName }}</span>
        <svg-icon icon="arrow-down"></svg-icon>
      </div>

      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item @click="handleLogout">退出</el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useRouter } from 'vue-router';
import { useStore } from '@/store';
import BreadCrumb from './BreadCrumb.vue';
import { logoutApi } from '@/api/account/login';

const router = useRouter();
const store = useStore();

// 用户信息
const userInfo = computed(() => store.userInfo);

// 菜单展开收起
function toggleCollapse() {
  store.isExpand = !store.isExpand;
}

// 退出登录
function handleLogout() {
  logoutApi().finally(() => {
    store.setLogout();
    router.push('/login');
  });
}
</script>

<style lang="scss">
.app-header {
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
  box-shadow: 0 0 6px rgba(0, 0, 0, 0.2);
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

.app-header-avatar {
  .el-avatar {
    font-size: 18px;
  }
}
</style>
