// 生成版本JOSN文件
const fs = require('node:fs')

function initVersion() {
  let data = JSON.stringify({
    version: 'v_' +  Date.now()
  })
  fs.writeFile('./public/version.json', data, err => {
    if (err) {
      console.log('生成version文件失败:', err)
    } else {
      console.log('生成version文件成功:', data)
    }
  })
}
initVersion()
