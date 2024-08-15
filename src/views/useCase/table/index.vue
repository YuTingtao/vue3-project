<!-- 表格案例 -->
<template>
  <div class="">
    <!-- 筛选条件 -->
    <el-form class="app-filter" :model="filter" label-width="">
      <el-form-item label="关键词">
        <el-input v-model.trim="filter.keyword" placeholder="请输入名称"></el-input>
      </el-form-item>

      <el-form-item label="状态">
        <el-select v-model="filter.status" placeholder="请选择" clearable>
          <el-option label="启用" :value="1"></el-option>
          <el-option label="禁用" :value="0"></el-option>
        </el-select>
      </el-form-item>

      <el-form-item style="margin-right: auto;">
        <el-button type="primary" @click="handleSearch">搜索</el-button>
        <el-button type="primary" plain @click="handleReset">重置</el-button>
      </el-form-item>

      <el-form-item>
        <el-button type="primary">新增</el-button>
      </el-form-item>
    </el-form>
    
    <!-- 表格 -->
    <el-table :data="tableData" border row-key="id">
      <el-table-column prop="name" label="姓名" min-width="150" show-overflow-tooltip></el-table-column>
      <el-table-column prop="性别" label="年龄" min-width="150" show-overflow-tooltip>
        <template #default="scope">
          {{ scope.row.sex == 0 ? '男' : scope.row.sex == 1 ? '女' : '' }}
        </template>
      </el-table-column>
      <el-table-column prop="age" label="年龄" min-width="150" show-overflow-tooltip></el-table-column>
      
      <el-table-column prop="" label="操作" min-width="150">
        <template #default="scope">
          <el-button type="primary" link>编辑</el-button>
          <el-button type="primary" link>删除</el-button>
        </template>
      </el-table-column>
    </el-table>

    <!-- 分页 -->
    <el-pagination
      v-model:current-page="filter.pageNum"
      v-model:page-size="filter.pageSize"
      layout="total, sizes, prev, pager, next, jumper"
      :background="true"
      :total="total"
      @size-change="handleSearch"
      @current-change="getList">
    </el-pagination>
  </div>
</template>

<script setup name="TableCase">
import { ref, reactive } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { useStore } from '@/store'
import commonApi from '@/api/common/index.js'

const router = useRouter()
const route = useRoute()
const store = useStore()

// 筛选条件
const filter = ref({
  keyword: '',
  status: null,
  pageNum: 1,
  pageSize: 10
})

// 表格数据
const tableData = ref([])
const total = ref(0)

// 获取列表
function getList() {
  commonApi.getList().then(res => {
    if (res.data.code == 200) {
      tableData.value = res?.data?.list || []
      total.value = res?.data?.total || 0
    }
  })
  
}
getList()

// 搜索
function handleSearch() {
  filter.value.pageNum = 1
  getList()
}

function handleReset() {
  filter.value = {
    keyword: '',
    status: null,
    pageNum: 1,
    pageSize: 10
  }
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
