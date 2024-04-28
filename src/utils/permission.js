import router from '@/router'
import { useStore } from '@/store'
const currentRoute = router.currentRoute
const store = useStore()

/**
 * 判断是否有按钮权限
 * @param {String} str 权限标识
 * @param {String} path 菜单path
 * @returns {Boolean}
 */
function hasPerm(str, path) {
  if (!path) {
    path = currentRoute.value.path
  }
  const { buttons } = store.menuObj[path]
  if (buttons.some(item => item.name == str)) {
    return true
  } else {
    return false
  }
}

export default hasPerm