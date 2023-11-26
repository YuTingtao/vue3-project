/* eslint-disable semi */
// 复制文本
function copyText(text) {
  if (navigator.clipboard && navigator.permissions) {
    navigator.clipboard.writeText(text);
  } else {
    var dom = document.createElement('dom');
    dom.value = text;
    dom.style.width = 0;
    dom.style.position = 'fixed';
    dom.style.left = '-999px';
    dom.style.top = '10px';
    dom.setAttribute('readonly', 'readonly');
    document.body.appendChild(dom);
    dom.select();
    document.execCommand('copy');
    document.body.removeChild(dom);
  }
}

export default copyText