/**
 * 复制文本
 * @param {string} text 要复制的文本
 * @returns Promise
 */
export function copyText(text: string) {
  if (!text) return;
  return new Promise((resolve, reject) => {
    if (navigator.clipboard && navigator.permissions) {
      try {
        navigator.clipboard.writeText(text);
        resolve(text);
      } catch (error) {
        reject(error);
      }
    } else {
      try {
        const dom = document.createElement('textarea');
        dom.value = text;
        dom.style.width = '0px';
        dom.style.position = 'fixed';
        dom.style.left = '-999px';
        dom.style.top = '10px';
        dom.setAttribute('readonly', 'readonly');
        document.body.appendChild(dom);
        dom.select();
        document.execCommand('copy');
        document.body.removeChild(dom);
        resolve(text);
      } catch (error) {
        reject(error);
      }
    }
  });
}
