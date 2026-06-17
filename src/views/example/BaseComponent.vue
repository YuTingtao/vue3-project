<template>
  <div>
    <h3 class="row-title">文本溢出tooltip提示：</h3>
    <div class="row-box" style="width: 400px">
      <EllipsisTooltip :content="text"></EllipsisTooltip>
      <EllipsisTooltip :content="text">
        <a href="javascript:;"> 插槽：{{ text }} </a>
      </EllipsisTooltip>
    </div>

    <h3 class="row-title">命令式图片预览：</h3>
    <div class="row-box">
      <el-button type="primary" @click="viewImg(urlList)">预览</el-button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import viewImg from '@/components/imgView/index.ts';

const text = '这是文本溢出tooltip提示，这是文本溢出tooltip提示，这是文本溢出tooltip提示';

// 图片地址
const urlList = ref([
  'https://img2.baidu.com/it/u=2193238619,3962578777&fm=253&fmt=auto&app=120&f=JPEG?w=1067&h=800',
  'https://img0.baidu.com/it/u=2099628,2438611947&fm=253&fmt=auto&app=138&f=JPEG?w=755&h=500'
]);
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
</style>
