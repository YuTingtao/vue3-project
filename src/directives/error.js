// 图片加载错误指令
export default {
    mounted(el, mounted) {
        if (el.src) {
            el.onerror = () => {
                el.src = mounted.value
                el.onerror = null
            }
        }
    },
    updated(el, mounted) {
        if (el.src) {
            el.onerror = () => {
                el.src = mounted.value
                el.onerror = null
            }
        }
    }
}