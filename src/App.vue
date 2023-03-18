<template>
  <el-config-provider :locale="zhCn">
    <router-view></router-view>
  </el-config-provider>
</template>

<script setup>
import zhCn from 'element-plus/lib/locale/lang/zh-cn'
import baseApi from '@/api/base'
import { useStore } from './store'

const store = useStore()

// 版本更新提示功能
window.addEventListener('error', function(e) {
  console.log(e)
  if (e.target.src) {
    getAppVersion()
  }
})
// 获取版本信息
async function getAppVersion() {
  let res = await baseApi.getAppVersion()
  if (res.status == 200) {
    let version = res.data.version
    if (version != store.appVersion) {
      ElMessageBox.alert('检测到版本有更新，请刷新页面', '版本更新提示', {
        callback: () => {
          location.reload()
        }
      })
    }
  }
}
</script>
