// 检测版本，提示更新
let flag

function checkVersion() {
  // 1秒内执行一次
  if (flag) {
    return
  }
  flag = true
  setTimeout(() => {
    flag = false
  }, 1000)
  // 核心代码
  var xhr = new XMLHttpRequest()
  xhr.open('get', './version.json', true)
  xhr.onreadystatechange = function() {
    if (xhr.readyState == 4 && xhr.status == 200) {
      var res = JSON.parse(xhr.responseText)
      if (res.version != sessionStorage.appVersion) {
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
