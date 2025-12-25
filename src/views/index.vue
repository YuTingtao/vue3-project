<template>
  <div class="page-intro">
    <div class="intro">{{ title }}</div>
    <AppPagination :total="100"></AppPagination>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const title = ref('Vue3 技术栈基础模板');
</script>

<style lang="scss" scoped>
.page-intro {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.intro {
  text-align: center;
  font-size: 24px;
  margin-bottom: 50px;
}
</style>
