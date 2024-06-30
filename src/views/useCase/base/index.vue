<template>
  <div class="page-svg">
    <div class="row-box">
      <span>svg-icon：</span>
      <svg-icon name="edit"></svg-icon>
    </div>
    
    <div class="row-box">
      <span>按钮权限：</span>
      <el-button v-if="hasPerm('add')" type="primary">新增</el-button>
      <el-button v-if="hasPerm('edit')" type="primary">编辑</el-button>
      <el-button v-if="hasPerm('delete')" type="primary">删除</el-button>
      <!-- 无权限 -->
      <el-button v-if="hasPerm('export')" type="primary">导出</el-button>
    </div>

    <div class="row-box">
      <span>公共组件：</span>
      <el-button type="primary" @click="viewImg(urlList)">图片预览</el-button>
    </div>

  </div>
</template>

<script setup name="BaseCase">
import { ref, reactive } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { useStore } from '@/store'
import hasPerm from '@/utils/permission.js'
import viewImg from '@/components/imgView'

const router = useRouter()
const route = useRoute()
const store = useStore()

// 图片地址
const urlList = ref([
  'https://img2.baidu.com/it/u=2193238619,3962578777&fm=253&fmt=auto&app=120&f=JPEG?w=1067&h=800',
  'https://img0.baidu.com/it/u=2099628,2438611947&fm=253&fmt=auto&app=138&f=JPEG?w=755&h=500'
])
</script>

<style lang="scss" scoped>
.page-svg {
  .row-box {
    margin-bottom: 20px;
  }
}
</style>
