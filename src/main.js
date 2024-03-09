import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index.js'
import pinia from './store/pinia.js'

import './assets/style/main.scss'
import * as ElIcons from '@element-plus/icons-vue'

// svg icon
import SvgIcon from './components/SvgIcon/SvgIcon.vue'
import 'virtual:svg-icons-register'

// 自定义指令
import importDirectives from './directives'

// 图片懒加载: <img class="lazyload" data-src="" />
import 'lazysizes'

// 检测更新
import { checkUpdate, autoCheckUpdate } from '@/utils/checkUpdate.js'

// 自动检测更新
autoCheckUpdate()

const app = createApp(App)
app.config.errorHandler = (err, instance, info) => {
  checkUpdate() // 检测更新
}
app.use(router)
app.use(pinia)

// 自定义指令
importDirectives(app)

// 注册el-icon组件
for (let key in ElIcons) {
  app.component(key, ElIcons[key])
}

// 注册svg-icon组件
app.component('svg-icon', SvgIcon)

// 挂载
app.mount('#app')

console.log('node_env:', process.env.NODE_ENV)
console.log('vite_env:', import.meta.env)