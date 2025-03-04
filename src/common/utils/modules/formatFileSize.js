/**
 * 格式化文件大小(KB、MB、G、T)
 * @param {Number} size 文件大小
 * @returns {String}
 */
export default function formatFileSize(size) {
  if (!size) {
    return ''
  }
  var num = 1024.0
  if (size < num) {
    return size + 'B'
  }
  if (size < Math.pow(num, 2)) {
    return (size / num).toFixed(2) + 'KB'
  }
  if (size < Math.pow(num, 3)) {
    return (size / Math.pow(num, 2)).toFixed(2) + 'MB'
  }
  if (size < Math.pow(num, 4)) {
    return (size / Math.pow(num, 3)).toFixed(2) + 'G'
  }
  return (size / Math.pow(num, 4)).toFixed(2) + 'T'
}
