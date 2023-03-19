<template>
  <el-config-provider :locale="zhCn">
    <router-view></router-view>
  </el-config-provider>
</template>

<script setup>
import zhCn from 'element-plus/lib/locale/lang/zh-cn'

// 监听script报错
document.querySelector('script').addEventListener('error', function(e) {
  console.log('App监听到的错误:', e)
})
</script>
