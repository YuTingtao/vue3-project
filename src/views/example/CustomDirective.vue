<template>
  <div>
    <!-- 加载更多指令 -->
    <h3 class="row-title">v-loadmore指令：</h3>
    <div class="row-box">
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

    <!-- 图片加载错误指令 -->
    <h3 class="row-title">v-error指令：</h3>
    <img
      v-error="'https://img0.baidu.com/it/u=2099628,2438611947&fm=253&fmt=auto&app=138&f=JPEG?w=755&h=500'"
      src="https://some-error-url/xx.jpg"
      width="500"
      alt="" />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

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
.row-title {
  font-size: 16px;
  margin-bottom: 10px;
}
.row-box {
  margin-bottom: 30px;
}
</style>
