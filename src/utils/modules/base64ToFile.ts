/**
 * base64转文件
 * @param {string} base64 base64字符串
 * @param {string} fileName 文件名（不带格式后缀）
 * @returns {File}
 */
export function base64ToFile(base64: string, fileName: string = `${Date.now()}`) {
  const arr = base64.split(',');
  const mimeMatch = arr[0].match(/:(.*?);/);
  const mime = mimeMatch ? mimeMatch[1] : '';
  const bstr = atob(arr[1]);
  let n = bstr.length;
  const u8arr = new Uint8Array(n);
  while (n--) {
    u8arr[n] = bstr.charCodeAt(n);
  }
  fileName = fileName + '.' + mime.split('/')[1];

  return new File([u8arr], fileName, { type: mime });
}
