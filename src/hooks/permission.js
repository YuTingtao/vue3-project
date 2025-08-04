// 判断按钮权限
import { useStore } from '@/store/index.ts';
import router from '@/router';
const currentRoute = router.currentRoute;

export function usePermission() {
  const store = useStore();

  /**
   * 是否有按钮权限
   * @param {string} str 按钮标识
   * @param {string} name 路由path/name
   * @returns
   */
  function hasPermission(str, name = currentRoute.value.name || currentRoute.value.path) {
    const buttons = store.menuObj[name]?.meta?.buttons || [];
    if (buttons.some(item => item.name === str)) {
      return true;
    } else {
      return false;
    }
  }
  return {
    hasPermission
  };
}
