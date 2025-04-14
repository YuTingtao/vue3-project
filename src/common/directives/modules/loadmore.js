// 加载更多
export default {
  mounted(el, binding) {
    let dom = el;
    let callback = binding.value;

    if (typeof binding.value === 'object') {
      dom = document.querySelector(binding.value.trigger);
      callback = binding.value.callback;
    }
    if (!dom) return;

    dom.addEventListener('scroll', () => {
      const { scrollTop, scrollHeight, clientHeight } = dom;
      if (scrollTop + clientHeight >= scrollHeight) {
        callback();
      }
    });
  }
};
