<!-- 基础案例 -->
<template>
  <div class="page-svg">
    <div class="row-box">
      <span>svg-icon：</span>
      <svg-icon name="edit"></svg-icon>
    </div>

    <div class="row-box">
      <span>按钮权限：</span>
      <el-button v-if="$hasPermission('add')" type="primary">新增</el-button>
      <el-button v-if="$hasPermission('edit')" type="primary">编辑</el-button>
      <el-button v-if="$hasPermission('delete')" type="primary">删除</el-button>
      <!-- 无权限 -->
      <el-button v-if="$hasPermission('export')" type="primary">导出</el-button>
    </div>

    <div class="row-box">
      <span>图片预览：</span>
      <el-button type="primary" @click="viewImg(urlList)">预览</el-button>
    </div>

    <div class="row-box">
      <span>v-loadmore指令：</span>
      <el-select
        style="width: 220px"
        v-model="selected"
        placeholder="请选择"
        clearable
        v-loadmore="{ scrollEl: '.el-select-dropdown__wrap', method: getOptions }"
        :teleported="false">
        <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"></el-option>
      </el-select>
    </div>
  </div>
</template>

<script setup lang="ts" name="BaseExample">
import { ref } from 'vue';
import viewImg from '@/components/imgView/index.js';

// 图片地址
const urlList = ref([
  'https://img2.baidu.com/it/u=2193238619,3962578777&fm=253&fmt=auto&app=120&f=JPEG?w=1067&h=800',
  'https://img0.baidu.com/it/u=2099628,2438611947&fm=253&fmt=auto&app=138&f=JPEG?w=755&h=500'
]);

// 加载更多指令
const selected = ref();
const options = ref<{ label: string; value: string }[]>([]);
const index = ref(0);
function getOptions() {
  if (options.value.length >= 100) {
    return false;
  }
  for (let i = 0; i < 10; i++) {
    index.value = index.value + 1;
    options.value.push({
      label: `选项 ${index.value}`,
      value: `${index.value}`
    });
  }
}
getOptions();
</script>

<style lang="scss" scoped>
.page-svg {
  .row-box {
    margin-bottom: 20px;
  }
}
</style>
