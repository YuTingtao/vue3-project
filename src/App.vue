<template>
  <el-config-provider :locale="zhCn">
    <router-view></router-view>
  </el-config-provider>
</template>

<script setup>
import zhCn from 'element-plus/lib/locale/lang/zh-cn'

// 获取版本信息
function getVersion() {
  var xhr = new XMLHttpRequest()
  xhr.open('get', './version.json', true)
  xhr.onreadystatechange = function() {
    if (xhr.readyState == 4 && xhr.status == 200) {
      var res = JSON.parse(xhr.responseText)
      var version = localStorage.appVersion || ''
      if (res.version != version) {
        localStorage.appVersion = res.version
        openVersionTips()
      }
    }
  }
  xhr.send()
}

// 打开提示
function openVersionTips() {
  ElMessageBox.alert('检测到版本有更新，将要刷新页面', '版本更新提示', {
    callback: () => {
      location.reload()
    }
  })
}

// 监听Promise Reject
window.addEventListener('unhandledrejection', function(e) {
  console.log('Promise Reject:', e)
  if (e.reason.message == 'error loading dynamically imported module') {
    getVersion()
  }
})
// 监听报错
window.addEventListener('error', function(e) {
  console.log('错误:', e)
  if (e.target.src) {
    getVersion()
  }
})
</script>
