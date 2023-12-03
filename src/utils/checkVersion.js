// 检测版本，提示更新
let loading = false

function checkVersion(init) {
  if (loading) {
    return
  }
  loading = true
  // 核心代码
  var xhr = new XMLHttpRequest()
  xhr.open('get', './version.json?timestamp=' + Date.now(), true)
  xhr.onreadystatechange = function() {
    loading = false
    if (xhr.readyState == 4 && xhr.status == 200) {
      var res = JSON.parse(xhr.responseText)
      if (!init && res.version != sessionStorage.appVersion) {
        ElMessageBox.alert('检测到版本有更新，请刷新页面', '版本更新提示', {
          callback: () => {
            location.reload(true)
          }
        })
      }
      sessionStorage.appVersion = res.version
    }
  }
  xhr.send()
}

export default checkVersion
