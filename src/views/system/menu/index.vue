<template>
  <div class="">
    <!-- 筛选条件 -->
    <el-form :model="filter" label-width="" inline>
      <el-form-item label="关键词">
        <el-input v-model.trim="filter.keyword" placeholder="请输入"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="handleSearch">搜索</el-button>
        <el-button type="primary" plain>新增</el-button>
      </el-form-item>
    </el-form>
    
    <el-table :data="tableData" border row-key="path" default-expand-all>
      <el-table-column prop="meta.title" label="菜单" min-width="150">
        <template #default="scope">
          <svg-icon v-if="scope.row.meta.icon" :name="scope.row.meta.icon"></svg-icon>
          <span class="item-name">{{ scope.row.meta.title }}</span>
        </template>
      </el-table-column>
      <el-table-column prop="meta.type" label="类型" min-width="150">
        <template #default="scope">
          {{ scope.row.meta.type == 0 ? '模块' : '菜单' }}
        </template>
      </el-table-column>
      <el-table-column prop="meta.visible" label="是否显示" min-width="150">
        <template #default="scope">
          {{ scope.row.meta.visible ? '是' : '否' }}
        </template>
      </el-table-column>
      <el-table-column prop="" label="操作" min-width="150">
        <template #default="scope">
          <el-button v-if="scope.row.meta.type == 0" type="primary" link>新增</el-button>
          <el-button type="primary" link>编辑</el-button>
          <el-button type="primary" link>删除</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script setup name="SystemMenu">
import { ref, reactive } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { useStore } from '@/store'
import routes from '@/router/modules/index'

const router = useRouter()
const route = useRoute()
const store = useStore()

// 筛选条件
const filter = reactive({
  keyword: '',
  pageNum: 1,
  pageSize: 10
})

const tableData = ref([])

// 获取列表
function getList() {
  tableData.value = routes
}
getList()

// 搜索
function handleSearch() {
  filter.pageNum = 1
  getList()
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
</style>
