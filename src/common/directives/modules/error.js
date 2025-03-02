// 图片加载错误重新赋值src指令
export default {
  mounted(el, binding) {
    if (el.src) {
      el.onerror = () => {
        el.src = binding.value;
        el.onerror = null;
      };
    }
  },
  updated(el, binding) {
    if (el.src) {
      el.onerror = () => {
        el.src = binding.value;
        el.onerror = null;
      };
    }
  }
};