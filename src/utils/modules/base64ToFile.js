/**
 * base64转文件
 * @param {String} base64 base64字符串
 * @param {String} fileName 文件名（不带格式后缀）
 * @returns {File}
 */
export function base64ToFile(base64, fileName = Date.now()) {
  var arr = base64.split(',');
  var mime = arr[0].match(/:(.*?);/)[1];
  var bstr = atob(arr[1]);
  var n = bstr.length;
  var u8arr = new Uint8Array(n);
  while (n--) {
    u8arr[n] = bstr.charCodeAt(n);
  }
  fileName = fileName + '.' + mime.split('/')[1];
  return new File([u8arr], fileName, { type: mime });
}
