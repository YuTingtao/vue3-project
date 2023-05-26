// 获取版本信息
export default function() {
  var xhr = new XMLHttpRequest()
  xhr.open('get', './version.json', true)
  xhr.onreadystatechange = function() {
    if (xhr.readyState == 4 && xhr.status == 200) {
      var res = JSON.parse(xhr.responseText)
      if (res.version != sessionStorage.appVersion) {
        ElMessageBox.alert('检测到版本有更新，请刷新页面', '版本更新提示', {
          callback: () => {
            location.reload()
          }
        })
      }
      sessionStorage.appVersion = res.version
    }
  }
  xhr.send()
}
