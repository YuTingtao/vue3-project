<!-- 基础案例 -->
<template>
  <div class="row-box">
    <span>按钮权限：</span>
    <el-button v-if="$hasPermission('add')" type="primary">新增</el-button>
    <el-button v-if="$hasPermission('edit')" type="primary">编辑</el-button>
    <el-button v-if="$hasPermission('delete')" type="primary">删除</el-button>
    <!-- 无权限 -->
    <el-button v-if="$hasPermission('export')" type="primary">导出</el-button>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
.row-box {
  margin-bottom: 20px;
}
</style>
