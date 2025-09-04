<template>
  <template v-if="item.meta.visible">
    <!-- 多层菜单 -->
    <el-sub-menu
      v-if="item.children && item.children.filter(item => item.meta.visible).length > 0"
      :index="item.path || item.meta.title">
      <template #title>
        <el-icon v-if="item.meta.icon">
          <svg-icon :name="item.meta.icon"></svg-icon>
        </el-icon>
        <span>{{ item.meta.title }}</span>
      </template>
      <MenuItem v-for="item2 in item.children" :key="item2.path" :item="item2"></MenuItem>
    </el-sub-menu>

    <!-- 一层菜单 -->
    <el-menu-item v-else :index="item.path" @click="routerTo(item.path)">
      <el-icon v-if="item.meta.icon">
        <svg-icon :name="item.meta.icon"></svg-icon>
      </el-icon>
      <span>{{ item.meta.title }}</span>
    </el-menu-item>
  </template>
</template>

<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();
defineProps({
  item: {
    type: Object,
    default: () => {}
  }
});

// 路由跳转
function routerTo(path) {
  router.push(path);
}
</script>

<style lang="scss"></style>
