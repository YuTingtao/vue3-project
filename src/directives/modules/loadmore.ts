// 加载更多
import { debounce } from 'lodash-es';
import type { Ref } from 'vue';

type BindingType = (() => void) | { method: () => void; scrollEl: string };

export default {
  mounted(el: HTMLElement, binding: Ref<BindingType>) {
    let dom = el;
    let method = binding.value;

    if (typeof binding.value === 'object') {
      const scrollDom = el.querySelector(binding.value.scrollEl);
      if (!scrollDom) {
        return;
      }
      dom = scrollDom as HTMLElement;
      method = binding.value.method;
    }

    const handleScroll = debounce(() => {
      const { scrollTop, scrollHeight, clientHeight } = dom;
      if (scrollTop + clientHeight >= scrollHeight - 20) {
        if (typeof method === 'function') {
          method();
        }
      }
    }, 300);

    dom.addEventListener('scroll', handleScroll);
  }
};
