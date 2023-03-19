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
  xhr.open('get', '/version.json', true)
  xhr.onreadystatechange = function() {
    if (xhr.readyState == 4 && xhr.status == 200) {
      var res = JSON.parse(xhr.responseText)
      var version = localStorage.appVersion || ''
      if (res.version != version) {
        localStorage.appVersion = res.version
        location.reload()
      }
    }
  }
  xhr.send()
}

// 监听script报错
window.addEventListener('error', function(e) {
  console.log('错误:', e)
  getVersion()
})
</script>
