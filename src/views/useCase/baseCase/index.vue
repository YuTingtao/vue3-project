<template>
  <div class="page-svg">

    <div class="row-box">
      <span>svg-icon：</span>
      <svg-icon name="case" size="16px"></svg-icon>
    </div>

    <div class="row-box">
      <span>菜单权限：</span>
      <el-button v-permission="{ path: '/baseCase' }" type="primary">基础案例菜单</el-button>
    </div>
    
    <div class="row-box">
      <span>按钮权限：</span>
      <!-- 简单用法 -->
      <el-button v-permission="'add'" type="primary">新增</el-button>
      <el-button v-permission="'edit'" type="primary">编辑</el-button>
      <!-- 高级用法 -->
      <el-button v-permission="{ path: '/baseCase', btn: 'delete' }" type="primary">删除</el-button>
      <!-- 无权限 -->
      <el-button v-permission="'export'" type="primary">导出</el-button>
    </div>

    <div class="row-box">
      <span>图片预览：</span>
      <el-button type="primary" @click="viewImg(urlList)">预览</el-button>
    </div>

  </div>
</template>

<script setup>
import { ref, reactive } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { useStore } from '@/store'
import viewImg from '@/components/base/imgViewer/index.js'

const router = useRouter()
const route = useRoute()
const store = useStore()

// 图片地址
const urlList = [
  new URL('@/assets/img/login/bg.jpg', import.meta.url).href,
  new URL('@/assets/img/logo.png', import.meta.url).href
]
</script>

<style lang="scss" scoped>
.page-svg {
  .row-box {
    margin-bottom: 20px;
  }
}
</style>
