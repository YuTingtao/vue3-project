<template>
  <div class="page-svg">

    <div class="row-box">
      <span>svg-icon：</span>
      <svg-icon name="edit"></svg-icon>
    </div>
    
    <div class="row-box">
      <span>按钮权限：</span>
      <el-button v-permission="'add'" type="primary" @click="router.push('/useCase/baseAdd')">新增</el-button>
      <el-button v-permission="'edit'" type="primary" @click="router.push('/useCase/baseAdd')">编辑</el-button>
      <el-button v-permission="'delete'" type="primary">删除</el-button>
      <!-- 无权限 -->
      <el-button v-permission="'export'" type="primary">导出</el-button>
    </div>

    <div class="row-box">
      <span>图片预览：</span>
      <el-button type="primary" @click="viewImg(urlList)">预览</el-button>
    </div>

  </div>
</template>

<script setup name="BaseCase">
import { ref, reactive } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { useStore } from '@/store'
import viewImg from '@/components/imgView/index.js'

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
