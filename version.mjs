// 生成版本JOSN文件
import fs from 'fs'

function initVersion() {
  const obj = {
    version: 'v_' +  Date.now()
  }
  fs.writeFile('./docs/version.json', JSON.stringify(obj), err => {
    if (err) {
      console.log('生成version文件失败:', err)
    } else {
      console.log('生成version文件:', JSON.stringify(obj))
    }
  })
}
initVersion()
