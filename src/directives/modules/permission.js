// 权限指令 v-permission
import { usePermission } from '@/hooks/permission.js';

export default {
  mounted(el, binding) {
    const { hasPermission } = usePermission();
    if (!hasPermission(binding.value)) {
      el.parentNode?.removeChild(el);
    }
  },
};