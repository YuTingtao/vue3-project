// 防抖函数
function debounce(fn, wait) {
  var timer
  return function() {
    var context = this, args = arguments
    if (timer) clearTimeout(timer)
    timer = setTimeout(function() {
      fn.apply(context, args)
    }, wait)
  }
}

export default debounce
