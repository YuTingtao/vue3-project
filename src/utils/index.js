// 自动化导入
// const files = import.meta.globEager('./*.js');
// const modules = {};

// Object.keys(files).forEach((key) => {
//     if (key == './index.js') return;
//     modules[key.replace(/(\.\/|\.js)/gi, '')] = files[key].default;
// })

// module.exports = {
//     ...modules
// }

/*
 * 由于vite不支持module.exports，注释掉了上面代码，改用手动引入
 */

// 手动导入
import deepClone from './deepClone.js'
import formatDate from './formatDate.js'
import formatFileSize from './formatFileSize.js'
import generateGuid from './generateGuid.js'
import getTreePath from './getTreePath.js'
import numToChinese from './numToChinese.js'
import saveBlobFile from './saveBlobFile.js'

export {
  deepClone,
  formatDate,
  formatFileSize,
  generateGuid,
  getTreePath,
  numToChinese,
  saveBlobFile
}
