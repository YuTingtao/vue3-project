/**
 * base64转文件
 * @param {*} base64 base64字符串
 * @param {*} fileName 文件名（不带格式后缀）
 * @returns File
 */
export default function base64ToFile(base64, fileName = Date.now()) {
  let arr = base64.split(',');
  let mime = arr[0].match(/:(.*?);/)[1];
  let bstr = atob(arr[1]);
  let n = bstr.length;
  let u8arr = new Uint8Array(n);
  while (n--) {
    u8arr[n] = bstr.charCodeAt(n);
  }
  fileName = fileName + '.' + mime.split('/')[1];
  return new File([u8arr], fileName, { type: mime });
}
