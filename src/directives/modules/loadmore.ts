// 加载更多
import { debounce } from 'lodash-es';
import type { Directive } from 'vue';

export type LoadmoreBinding = (() => void) | { method: () => void; scrollEl: string };
export type LoadmoreDirective = Directive<HTMLElement, LoadmoreBinding>;
declare module 'vue' {
  export interface ComponentCustomProperties {
    // 使用 v 作为前缀 (v-loadmore)
    vLoadmore: LoadmoreDirective;
  }
}

export default {
  mounted(el, binding) {
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
} satisfies LoadmoreDirective;
