<template>
  <div class="app-sider">
    <el-scrollbar>
      <div class="app-sider-top" :class="store.isExpand ? '' : 'is-expand'">
        <img class="app-sider-logo" src="@/assets/img/logo.png" alt="" />
        <span>Vue3企业中台</span>
      </div>

      <el-menu
        :collapse="!store.isExpand"
        :unique-opened="true"
        :default-active="String(route.meta.activePath || route.path || route.name)">
        <MenuItem v-for="item in userMenus" :key="item.path" :item="item"></MenuItem>
      </el-menu>
    </el-scrollbar>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import { useStore } from '@/store';
import MenuItem from './MenuItem.vue';

const route = useRoute();
const store = useStore();

// 用户菜单
const userMenus = computed(() => store.userMenus);
</script>

<style lang="scss">
.app-sider {
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

.el-menu--popup {
  --el-menu-item-height: 44px;
}

.app-sider-top {
  position: sticky;
  top: 0;
  z-index: 1;
  display: flex;
  align-items: center;
  overflow: hidden;
  width: 210px;
  padding: 16px 0;
  background: var(--el-menu-bg-color);
  color: #fff;
  font-size: 16px;
  font-weight: bolder;
  white-space: nowrap;
  transition: width 0.3s ease-in-out;
  &.is-expand {
    width: 44px;
  }
}

.app-sider-logo {
  width: 24px;
  height: 24px;
  margin-left: 20px;
  margin-right: 10px;
}
</style>
