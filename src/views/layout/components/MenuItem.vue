<template>
  <template v-if="item.meta?.hidden !== 0">
    <!-- 多层菜单 -->
    <el-sub-menu v-if="children.length > 0" :index="(item.name as string) || item.path">
      <template #title>
        <el-icon v-if="item.meta?.icon">
          <svg-icon :icon="item.meta?.icon"></svg-icon>
        </el-icon>
        <span>{{ item.meta?.title }}</span>
      </template>
      <MenuItem v-for="item2 in children" :key="item2.path" :item="item2"></MenuItem>
    </el-sub-menu>

    <!-- 一层菜单 -->
    <el-menu-item v-else :index="item.path" @click="routerTo((item.name as string) || item.path)">
      <el-icon v-if="item.meta?.icon">
        <svg-icon :icon="item.meta.icon"></svg-icon>
      </el-icon>
      <span>{{ item.meta?.title }}</span>
    </el-menu-item>
  </template>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useRouter } from 'vue-router';
import type { RouteRecordRaw } from 'vue-router';

const router = useRouter();

defineOptions({
  inheritAttrs: false
});

const props = defineProps<{
  item: RouteRecordRaw;
}>();

const children = computed(() => {
  return props.item.children?.filter((item) => item.meta?.hidden !== 0) || [];
});

// 路由跳转
function routerTo(path: string) {
  router.push(path);
}
</script>
