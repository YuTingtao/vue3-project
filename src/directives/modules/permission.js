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
        if (!store.flatMenus[path]) {
          el.parentNode.removeChild(el)
        }
      } else {
        // 按钮权限
        const btns = store.flatMenus[path]
        if (!btns || !btns.some(item => item.name == btn)) {
          el.parentNode.removeChild(el)
        }
      }
    } else {
      // 当前路由对应页面按钮权限
      const btns = store.flatMenus[currentRoute.value.path]
      if (!btns.some(item => item.name == binding.value)) {
        el.parentNode.removeChild(el)
      }
    }
  }
}