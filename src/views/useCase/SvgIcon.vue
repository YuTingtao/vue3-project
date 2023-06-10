<template>
  <div class="page-svg">
    <div class="icon-box">
      <svg-icon name="case" size="16px"></svg-icon>
      <span> svg-icon案例：{{ dayjs().format('YYYY-MM-DD HH:mm:ss') }}</span>
    </div>
    <div>
      <span>按钮权限：</span>
      <el-button v-permission="'add'" type="primary">新增</el-button>
      <el-button v-permission="'edit'" type="primary">编辑</el-button>
      <el-button v-permission="'delete'" type="primary">删除</el-button>
      <el-button v-permission="'export'" type="primary">导出</el-button>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { useStore } from '@/store'
import dayjs from 'dayjs'

const router = useRouter()
const route = useRoute()
const store = useStore()
</script>

<style lang="scss" scoped>
.page-svg {
  .icon-box {
    margin-bottom: 15px;
  }
}
</style>
