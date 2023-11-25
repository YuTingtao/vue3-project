// 节流函数
function throttle(fn, wait = 500) {
  var timer;
  return function() {
    var context = this, args = arguments;
    if (!timer) {
      timer = setTimeout(function() {
        timer = null;
        fn.apply(context, args);
      }, wait)
    }
  }
}

export default throttle
