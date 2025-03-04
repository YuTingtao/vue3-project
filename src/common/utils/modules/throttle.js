/* eslint-disable @typescript-eslint/no-this-alias */
/**
 * 节流函数
 * @param {*} fn 目标函数
 * @param {*} wait 时间间隔
 * @returns function
 */
export default function throttle(fn, wait = 500) {
  var timer
  return function() {
    var context = this, args = arguments
    if (!timer) {
      timer = setTimeout(function() {
        timer = null
        fn.apply(context, args)
      }, wait)
    }
  }
}
