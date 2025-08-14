<template>
  <div class="menu-detail">
    <div class="menu-title">{{ detail.meta.title }}</div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import { useStore } from '@/store/index.ts';

defineOptions({
  name: 'MenuEdit'
});

const route = useRoute();
const store = useStore();

// 详情
const detail = computed(() => store.menuObj[route.query.path]);
</script>

<style lang="scss" scoped></style>
