<!-- 菜单权限 -->
<template>
  <div class="page-menu">
    <!-- 筛选条件 -->
    <el-form class="app-filter" :model="filter" label-width="">
      <el-form-item label="关键词">
        <el-input v-model.trim="filter.keyword" placeholder="请输入菜单名称"></el-input>
      </el-form-item>

      <el-form-item label="状态">
        <el-select v-model="filter.status" placeholder="请选择" clearable>
          <el-option label="启用" :value="1"></el-option>
          <el-option label="禁用" :value="0"></el-option>
        </el-select>
      </el-form-item>

      <el-form-item style="margin-right: auto">
        <el-button type="primary" @click="handleSearch">搜索</el-button>
        <el-button type="primary" plain @click="handleReset">重置</el-button>
      </el-form-item>

      <el-form-item>
        <el-button type="primary">新增</el-button>
      </el-form-item>
    </el-form>

    <!-- 表格 -->
    <el-table :data="tableData" border row-key="path" default-expand-all>
      <el-table-column prop="meta.title" label="菜单" min-width="200">
        <template #default="scope">
          <svg-icon v-if="scope.row.meta.icon" :icon="scope.row.meta.icon"></svg-icon>
          <span class="item-name">{{ scope.row.meta.title }}</span>
        </template>
      </el-table-column>

      <el-table-column prop="meta.visible" label="显示 / 隐藏" min-width="150">
        <template #default="scope">
          {{ scope.row.meta.visible ? '显示' : '隐藏' }}
        </template>
      </el-table-column>

      <el-table-column prop="meta.buttons" label="按钮" min-width="200">
        <template #default="scope">
          <div class="btn-box">
            <span v-for="item in scope.row.meta.buttons" :key="item.name" class="btn">
              {{ item.title }}
            </span>
          </div>
        </template>
      </el-table-column>

      <el-table-column prop="" label="操作" min-width="150">
        <template #default="scope">
          <el-button type="primary" link @click="toDetail(scope.row)">详情</el-button>
        </template>
      </el-table-column>
    </el-table>

    <!-- 分页 -->
    <BasePagination
      v-model:current-page="filter.pageNum"
      v-model:page-size="filter.pageSize"
      :total="total"
      @size-change="handleSearch"
      @current-change="getList">
    </BasePagination>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import type { RouteRecordRaw } from 'vue-router';
import routes from '@/router/modules/index.ts';

const router = useRouter();

// 筛选条件
const filter = ref({
  keyword: '',
  status: undefined,
  pageNum: 1,
  pageSize: 10
});

// 表格数据
const tableData = ref<RouteRecordRaw[]>([]);
const total = ref(0);

// 获取列表
function getList() {
  tableData.value = routes;
  total.value = routes.length;
}
getList();

// 搜索
function handleSearch() {
  filter.value.pageNum = 1;
  getList();
}

// 重置
function handleReset() {
  filter.value = {
    keyword: '',
    status: undefined,
    pageNum: 1,
    pageSize: 10
  };
  getList();
}

// 详情
function toDetail(row: RouteRecordRaw) {
  router.push(`/system/menu/12345?path=${row.path}`);
}
</script>

<style lang="scss" scoped>
.el-table {
  .svg-icon {
    margin-right: 5px;
    font-size: 16px;
  }

  .item-name {
    display: inline-block;
    vertical-align: middle;
  }
}

.btn-box {
  margin-top: -10px;
  .btn {
    display: inline-block;
    margin-top: 10px;
    margin-right: 20px;
  }
}
</style>
