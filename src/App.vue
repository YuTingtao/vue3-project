<template>
  <el-config-provider :locale="zhCn">
    <router-view></router-view>
  </el-config-provider>
</template>

<script setup>
import zhCn from 'element-plus/lib/locale/lang/zh-cn'
import { computed, watch } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { useStore } from '@/store'

const router = useRouter()
const route = useRoute()
const store = useStore()

// 菜单路径
const menuPaths = computed(() => {
  return ['/', '/login', ...store.menuPaths]
})

// 首个菜单路径
const firstMenuPath = computed(() => store.firstMenuPath)

// 路由拦截
watch(() => route.path, val => {
  if (!menuPaths.value.includes(val)) {
    if (val != '/index') {
      ElMessage.error('暂无权限访问')
    }
    router.replace(firstMenuPath.value)
  }
})
</script>
