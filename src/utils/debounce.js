/* eslint-disable @typescript-eslint/no-this-alias */
/**
 * 防抖函数
 * @param {function} fn 执行函数
 * @param {number} wait 时间间隔
 * @returns function
 */
export default function debounce(fn, wait = 500) {
  var timer;
  return function() {
    var context = this, args = arguments;
    if (timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(function() {
      fn.apply(context, args);
    }, wait);
  };
}
