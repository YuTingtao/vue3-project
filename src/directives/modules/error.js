// 图片加载错误，重新赋值src 指令
export default {
  mounted(el, directive) {
    if (el.src) {
      el.onerror = () => {
        el.src = directive.value
        el.onerror = null
      }
    }
  },
  updated(el, directive) {
    if (el.src) {
      el.onerror = () => {
        el.src = directive.value
        el.onerror = null
      }
    }
  }
}