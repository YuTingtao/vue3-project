<template>
  <div class="menu-detail">
    <div class="menu-title">{{ detail.title }}</div>
  </div>
</template>

<script setup name="MenuDetail">
import { ref } from 'vue';

const detail = ref({
  title: '菜单详情'
});
</script>

<style lang="scss" scoped>
.menu-title {
  font-size: 16px;
}
</style>
