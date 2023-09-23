import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index.js'
import pinia from './store/pinia.js'

import './assets/style/base/main.scss'
import * as ElIcons from '@element-plus/icons-vue'

// svg icon
import SvgIcon from './components/base/svgIcon.vue'
import 'virtual:svg-icons-register'

// 自定义指令
import importDirectives from './directives'

// 图片懒加载: <img class="lazyload" data-src="" />
import 'lazysizes'

// 版本检测
import checkVersion from './utils/checkVersion.js'
checkVersion('init')

const app = createApp(App)
// 处理错误
app.config.errorHandler = (err, instance, info) => {
  // 版本检测
  checkVersion()
}
app.use(router)
app.use(pinia)

// 导入自定义指令
importDirectives(app)

// 注册el-icon组件
for (let key in ElIcons) {
  app.component(key, ElIcons[key])
}

// 注册svg-icon组件
app.component('svg-icon', SvgIcon)

// 挂载
app.mount('#app')
