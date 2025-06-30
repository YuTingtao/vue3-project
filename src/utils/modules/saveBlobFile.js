/**
 * 数据流保存为文件
 * @param {Blob} res 服务端返回数据
 * @param {String} fileName 自定义文件名，选填
 */
export default function saveBlobFile(res, fileName) {
  if (!fileName) {
    if (res.headers['content-disposition']) {
      fileName = res.headers['content-disposition'].match(/filename=(.*)/)[1];
    } else {
      fileName = Date.now();
    }
  }
  // 将二进制流转为blob
  const blob = new Blob([res.data], {
    type: res.headers['content-type'] || 'application/octet-stream'
  });
  // 创建blob url地址
  const blobURL = window.URL.createObjectURL(blob);
  let link = document.createElement('a');
  link.style.display = 'none';
  link.href = blobURL;
  link.setAttribute('download', decodeURI(fileName));
  if (typeof link.download === 'undefined') {
    link.setAttribute('target', '_blank');
  }
  document.body.appendChild(link);
  link.click();
  window.URL.revokeObjectURL(blobURL);
  document.body.removeChild(link);
  link = null;
}
