/**
 * 防抖函数
 * @param {Function} fn 执行函数
 * @param {Number} wait 时间间隔
 * @returns {Function}
 */
export default function debounce(fn, wait = 500) {
  var timer;
  return function() {
    // eslint-disable-next-line @typescript-eslint/no-this-alias
    var context = this, args = arguments;
    if (timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(function() {
      fn.apply(context, args);
    }, wait);
  };
}
