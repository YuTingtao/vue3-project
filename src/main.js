import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index.js'
import pinia from './store/pinia.js'
import { useStore } from './store/index.js'

// 公共样式
import './assets/style/main.scss'

// 图片懒加载: <img class="lazyload" data-src="" />
import 'lazysizes'

// 检测更新
import { checkUpdate, autoCheckUpdate } from '@/utils/checkUpdate.js'
autoCheckUpdate()

// 模拟数据
import './mock'

const app = createApp(App)
app.config.errorHandler = (err, instance, info) => {
  console.error(err, instance, info)
  checkUpdate() // 检测更新
}
app.use(router)
app.use(pinia)

// 自定义指令
import importDirectives from './directives'
importDirectives(app)

// 注册el-icon组件
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}

// 注册svg-icon组件
import SvgIcon from './components/svgIcon/SvgIcon.vue'
import 'virtual:svg-icons-register'
app.component('svg-icon', SvgIcon)

const store = useStore()
// 登录状态，获取用户菜单
if (store.token) {
  store.getUserMenus()
}

// 挂载
app.mount('#app')

console.log('node_env:', process.env.NODE_ENV)
console.log('vite_env:', import.meta.env)