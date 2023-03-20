// 获取版本信息
function getVersion(isCheck = false) {
  var xhr = new XMLHttpRequest()
  xhr.open('get', './version.json', true)
  xhr.onreadystatechange = function() {
    if (xhr.readyState == 4 && xhr.status == 200) {
      var res = JSON.parse(xhr.responseText)
      if (isCheck) {
        var version = sessionStorage.appVersion
        if (res.version != version) {
          ElMessageBox.alert('检测到版本有更新，请刷新页面', '版本更新提示', {
            callback: () => {
              location.reload()
            }
          })
        }
      } else {
        sessionStorage.appVersion = res.version
      }
    }
  }
  xhr.send()
}
getVersion()

// 监听Promise Reject
window.addEventListener('unhandledrejection', function(e) {
  if (e.reason.message == 'error loading dynamically imported module') {
    getVersion(true)
  }
})