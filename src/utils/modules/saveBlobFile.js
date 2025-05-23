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
  var blob = new Blob([res.data], {
    type: res.headers['content-type'] || 'application/octet-stream'
  });
  // 兼容IE：window.navigator.msSaveBlob以本地方式保存文件
  if (typeof window.navigator.msSaveBlob !== 'undefined') {
    window.navigator.msSaveBlob(blob, decodeURI(fileName));
  } else {
    // 创建blob url地址
    var blobURL = window.URL.createObjectURL(blob);
    var dom = document.createElement('a');
    dom.style.display = 'none';
    dom.href = blobURL;
    dom.setAttribute('download', decodeURI(fileName));
    if (typeof dom.download === 'undefined') {
      dom.setAttribute('target', '_blank');
    }
    document.body.appendChild(dom);
    dom.click();
    document.body.removeChild(dom);
    // 释放blob url地址
    window.URL.revokeObjectURL(blobURL);
  }
}
