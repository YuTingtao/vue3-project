// 加载更多
import { debounce } from 'lodash-es';

export default {
  mounted(el, binding) {
    let dom = el;
    let method = binding.value;

    if (typeof binding.value === 'object') {
      dom = el.querySelector(binding.value.scrollEl);
      method = binding.value.method;
    }
    if (!dom) return;

    dom.addEventListener('scroll', debounce(() => {
      const { scrollTop, scrollHeight, clientHeight } = dom;
      console.log(scrollTop, scrollHeight, clientHeight);
      if (scrollTop + clientHeight >= scrollHeight - 20) {
        method();
      }
    }, 300));
  }
};
