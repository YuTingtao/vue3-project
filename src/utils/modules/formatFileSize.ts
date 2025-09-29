/**
 * 格式化文件大小(KB、MB、G、T)
 * @param {number} size 文件大小
 * @returns {string}
 */
export function formatFileSize(size: number) {
  if (!size) {
    return '';
  }
  const num = 1024.0;
  if (size < num) {
    return size + 'B';
  }
  if (size < Math.pow(num, 2)) {
    return (size / num).toFixed(2) + 'KB';
  }
  if (size < Math.pow(num, 3)) {
    return (size / Math.pow(num, 2)).toFixed(2) + 'MB';
  }
  if (size < Math.pow(num, 4)) {
    return (size / Math.pow(num, 3)).toFixed(2) + 'G';
  }
  return (size / Math.pow(num, 4)).toFixed(2) + 'T';
}
