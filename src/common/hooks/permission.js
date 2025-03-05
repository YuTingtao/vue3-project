// 权限
import { useStore } from '@/store'
import router from '@/router'
const currentRoute = router.currentRoute

export function usePermission() {
  const store = useStore()

  /**
   * 是否有按钮权限
   * @param {String} str 按钮标识
   * @param {String} name 路由name
   * @returns 
   */
  function hasPermission(str, name) {
    if (!name) {
      name = currentRoute.value.name
    }
    const buttons = store.menuObj[name]?.meta?.buttons || []
    if (buttons.some(item => item == str)) {
      return true
    } else {
      return false
    }
  }
  return {
    hasPermission
  }
}
