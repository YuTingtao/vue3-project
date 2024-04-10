// 按钮权限指令
import { useStore } from '@/store'
import router from '@/router'
const currentRoute = router.currentRoute

export default {
  mounted(el, binding) {
    const store = useStore()
    // console.log(binding.value)
    if (typeof binding.value == 'object') {
      const { path, btn } = binding.value
      if (!btn) {
        // 菜单权限
        if (!store.menuObj[path]) {
          el.parentNode.removeChild(el)
        }
      } else if (store.menuObj[path]) {
        // 按钮权限
        const { buttons } = store.menuObj[path]
        if (!buttons || !buttons.some(item => item.name === btn)) {
          el.parentNode.removeChild(el)
        }
      }
    } else {
      // 当前路由对应页面按钮权限
      const { buttons } = store.menuObj[currentRoute.value.path]
      if (!buttons.some(item => item.name === binding.value)) {
        el.parentNode.removeChild(el)
      }
    }
  }
}