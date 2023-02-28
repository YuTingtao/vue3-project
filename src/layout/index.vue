<!-- 全局layout -->
<template>
  <!-- 头部 -->
  <div class="g-header" :style="`left: ${isCollapse ? '64px':'220px'};`">
    <el-icon class="menu-collapse" @click="toggleCollapse">
      <component :is="isCollapse? 'Expand':'Fold'"></component>
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
        <span>{{ userInfo.realName }}</span>
        <el-icon>
          <arrow-down />
        </el-icon>
      </div>
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item @click="handleLogout">退出</el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
  </div>
  <!-- 侧边菜单 -->
  <div class="g-aside">
    <el-scrollbar>
      <el-menu
        :collapse="isCollapse"
        router
        :default-active="$route.meta.activePath || $route.path"
        text-color="#fff"
        background-color="#323537">
        <MenuItem :menus="menus"></MenuItem>
      </el-menu>
    </el-scrollbar>
  </div>
  <!-- 主体 -->
  <div class="g-main" :style="`padding-left: ${isCollapse ? '64px':'220px'};`">
    <!-- 页面主体 -->
    <router-view class="g-page"></router-view>
  </div>
</template>

<script setup>
import { ref, reactive, computed } from 'vue'
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

const isCollapse = ref(false)
function toggleCollapse() {
  isCollapse.value = !isCollapse.value
}

// 退出登录
function handleLogout() {
  store.setLogout()
  router.replace('/login')
}
</script>

<style lang="scss">
// 头部
.g-header {
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
.g-aside {
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  z-index: 110;
  color: #fff;
  background: #323537;
  .el-menu--vertical {
    border-right: none;
    &:not(.el-menu--collapse) {
      width: 220px;
    }
  }
}

// 主体
.g-main {
  box-sizing: border-box;
  padding-left: 220px;
  padding-top: 56px;
  min-height: 100%;
  background: #fff;
  transition: padding-left var(--el-transition-duration) ease-in-out;
}

.g-page {
  box-sizing: border-box;
  min-height: 100%;
  margin: 20px;
}
</style>