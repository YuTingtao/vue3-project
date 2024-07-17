<!-- 面包屑组件 -->
<template>
  <el-breadcrumb>
    <el-breadcrumb-item v-for="(item, index) in breadcrumbs" :key="item.path + index" :to="item.path">
      {{ item.title }}
    </el-breadcrumb-item>
  </el-breadcrumb>
</template>

<script setup>
import { ref, reactive, watch } from 'vue'
import { useRouter, useRoute } from 'vue-router'

const router = useRouter()
const route = useRoute()

// 面包屑
const breadcrumbs = ref([])
// 所有路由
const routes = router.getRoutes()
// console.log(routes)

// 获取面包屑
function getBreadcrumbs() {
  breadcrumbs.value = []
  let matched = route.matched
  if (matched[0].name == 'layout') {
    matched = matched.slice(1)
  }
  // console.log(matched)
  if (matched.length > 0) {
    for (let i = matched.length - 1; i >= 0; i--) {
      const item = matched[i]
      let path = item.path
      // 最后一层或者菜单模块的path为空
      if ((i == matched.length - 1) || item.meta.type == 0) {
        path = ''
      }
      breadcrumbs.value.unshift({
        path: path,
        title: item.meta.title
      })
      // 添加自定义parentPath
      const parentPath = item.meta.parentPath || ''
      if (parentPath) {
        breadcrumbs.value.unshift(...getParentsBread(parentPath))
      }
    }
  }
}

// 递归获取父级面包屑
function getParentsBread(path, arr = []) {
  const parent = routes.find(item => item.path == path)
  if (parent) {
    arr.unshift({
      path: parent.meta.type == 0 ? '' : parent.path,
      title: parent.meta.title
    })
  }
  if (parent.meta.parentPath) {
    return getParentsBread(parent.meta.parentPath, arr)
  } else {
    return arr
  }
}

// 监听路由path
watch(() => route.path, () => {
  getBreadcrumbs()
}, {
  immediate: true
})

</script>

<style lang="scss" scoped>

</style>
