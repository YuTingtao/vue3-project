<!-- 基础案例 -->
<template>
  <div>
    <h3 class="row-title">按钮权限：</h3>
    <div class="row-box">
      <el-button v-if="$hasPermission('add')" type="primary">新增</el-button>
      <el-button v-if="$hasPermission('edit')" type="primary">编辑</el-button>
      <el-button v-if="$hasPermission('delete')" type="primary">删除</el-button>
      <!-- 无权限 -->
      <el-button v-if="$hasPermission('export')" type="primary">导出</el-button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { usePermission } from '@/hooks/permission';
const { hasPermission } = usePermission();

// js中使用hasPermission
setTimeout(() => {
  if (hasPermission('add')) {
    ElMessage.success('有新增权限');
  } else {
    ElMessage.warning('没有新增权限');
  }
}, 1000);
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
