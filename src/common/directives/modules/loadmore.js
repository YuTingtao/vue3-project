// 加载更多
export default {
  mounted(el, binding) {
    let dom = el;
    let method = binding.value;

    if (typeof binding.value === 'object') {
      dom = document.querySelector(binding.value.el);
      method = binding.value.method;
    }
    if (!dom) return;

    dom.addEventListener('scroll', () => {
      const { scrollTop, scrollHeight, clientHeight } = dom;
      if (scrollTop + clientHeight >= scrollHeight) {
        method();
      }
    });
  }
};
