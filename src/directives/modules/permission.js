// 按钮权限指令
import { useStore } from '@/store'
import router from '@/router'
const currentRoute = router.currentRoute

export default {
  mounted(el, binding) {
    const store = useStore()
    // console.log(binding.value)
    const { buttons = [] } = store.menuObj[currentRoute.value.path].meta
    if (!buttons.some(item => item === binding.value)) {
      el.parentNode.removeChild(el)
    }
  }
}