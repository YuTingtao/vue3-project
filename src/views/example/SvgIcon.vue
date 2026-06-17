<template>
  <div>
    <!-- svg-icon -->
    <h3 class="row-title">svg-icon:</h3>
    <div class="row-box flex-wrap">
      <div
        v-for="(item, index) in svgIcons"
        :key="index"
        class="svg-icon-box"
        @click="copySvgIcon(item)">
        <svg-icon :icon="item"></svg-icon>
        <span>{{ item }}</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { copyText } from '@/utils';

const svgIcons = ref<string[]>([]);
const svgFiles = import.meta.glob('@/assets/icon/**/*.svg', { eager: true });
for (const path in svgFiles) {
  const name = path.replace(/(.*\/)*([^.]+).*/gi, '$2');
  svgIcons.value.push(name);
}

// 复制svg-icon
function copySvgIcon(name: string) {
  copyText(`<svg-icon icon="${name}"></svg-icon>`);
  ElMessage.success('已复制到剪切板');
}
</script>

<style lang="scss" scoped>
.row-title {
  font-size: 18px;
  margin-bottom: 10px;
}
.row-box {
  margin-bottom: 30px;
}

.flex-wrap {
  display: flex;
  flex-wrap: wrap;
}
.svg-icon-box {
  margin: 0 20px 20px 0;
  min-width: 80px;
  text-align: center;
  cursor: pointer;
  .svg-icon {
    display: block;
    margin: 0 auto 5px auto;
    font-size: 20px;
  }
}
</style>
