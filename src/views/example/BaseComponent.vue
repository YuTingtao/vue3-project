<template>
  <div>
    <!-- svg-icon -->
    <h3 class="row-title">svg-icon:</h3>
    <div class="row-box">
      <div v-for="(item, index) in svgIcons" :key="index" class="svg-icon-box">
        <svg-icon :name="item"></svg-icon>
        <span>{{ item }}</span>
      </div>
    </div>

    <h3 class="row-title">图片预览：</h3>
    <div class="row-box">
      <el-button type="primary" @click="viewImg(urlList)">预览</el-button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import viewImg from '@/components/imgView/index.js';

// svg-icon
const svgIcons = ref<string[]>([]);
const svgFiles = import.meta.glob('@/assets/icon/**/*.svg', { eager: true });
for (const path in svgFiles) {
  const name = path.replace(/(.*\/)*([^.]+).*/gi, '$2');
  svgIcons.value.push(name);
}

// 图片地址
const urlList = ref([
  'https://img2.baidu.com/it/u=2193238619,3962578777&fm=253&fmt=auto&app=120&f=JPEG?w=1067&h=800',
  'https://img0.baidu.com/it/u=2099628,2438611947&fm=253&fmt=auto&app=138&f=JPEG?w=755&h=500'
]);
</script>

<style lang="scss" scoped>
.row-title {
  font-size: 16px;
  margin-bottom: 10px;
}

.row-box {
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 20px;
}

.svg-icon-box {
  margin: 0 20px 10px 0;
  .svg-icon {
    display: block;
    margin: 0 auto 5px auto;
    font-size: 20px;
  }
}
</style>
