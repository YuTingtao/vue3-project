<!-- 全局layout -->
<template>
  <AppHeader></AppHeader>
  <AppSider></AppSider>

  <div class="app-main" :style="`padding-left: ${store.isExpand ? '210px' : '64px'};`">
    <router-view class="app-view"></router-view>
  </div>
</template>

<script setup lang="ts">
import { useStore } from '@/store/index.ts';
import AppHeader from './components/AppHeader.vue';
import AppSider from './components/AppSider.vue';

const store = useStore();
</script>

<style lang="scss">
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
