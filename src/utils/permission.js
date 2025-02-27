import router from '@/router';
import { useStore } from '@/store';
const currentRoute = router.currentRoute;
const store = useStore();

/**
 * 判断是否有按钮权限
 * @param {String} str 权限标识
 * @param {String} name 菜单name
 * @returns {Boolean}
 */
function hasPerm(str, name) {
  if (!name) {
    name = currentRoute.value.name;
  }
  const buttons = store.menuObj[name]?.meta?.buttons || [];
  if (buttons.some(item => item == str)) {
    return true;
  } else {
    return false;
  }
}

export default hasPerm;