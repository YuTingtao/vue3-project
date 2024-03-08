// 检测版本是否有更新，提示刷新页面
let lastVersion // 最近版本

// 检测更新函数
export function checkUpdate() {
  const xhr = new XMLHttpRequest()
  xhr.open('get', './version.json?t=' + Date.now(), true)
  xhr.onreadystatechange = function() {
    if (xhr.readyState == 4 && xhr.status == 200) {
      const res = JSON.parse(xhr.responseText)
      if (!lastVersion) {
        lastVersion = res.version
        return
      }
      if (lastVersion != res.version) {
        lastVersion = res.version
        ElMessageBox.alert('检测到版本有更新，请点击确定刷新页面', '提示').then(() => {
          location.reload(true)
        })
      }
    }
  }
  xhr.send()
}

// 自动检测更新
export function autoCheckUpdate() {
  setInterval(() => {
    checkUpdate()
  }, 300000)
}
