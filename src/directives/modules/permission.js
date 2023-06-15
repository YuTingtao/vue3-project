// 按钮权限指令
import { useStore } from '@/store'
import router from '@/router'
const currentRoute = router.currentRoute

export default {
  mounted(el, binding) {
    const store = useStore()
    // 当前按钮名称
    const name = binding.value
    // 对应页面所有按钮
    const pageBtns = store.flatMenus[currentRoute.value.name]
    if (!pageBtns.some(item => item.name == name)) {
      el.parentNode.removeChild(el)
    }
  }
}