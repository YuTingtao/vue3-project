import type { DirectiveBinding } from 'vue';

const map = new WeakMap();

const ob = new ResizeObserver(entries => {
  entries.forEach(entry => {
    const record = map.get(entry.target);
    const { handler, isInitial } = record;
    if (!isInitial && typeof handler === 'function') {
      handler(entry.contentRect);
    }
    record.isInitial = false;
  });
});

export default {
  mounted(el: HTMLElement, binding: DirectiveBinding<() => void>) {
    map.set(el, { handler: binding.value, isInitial: true });
    ob.observe(el);
  },
  unmounted(el: HTMLElement) {
    ob.unobserve(el);
  }
};
