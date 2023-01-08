import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index'
import { createPinia } from 'pinia'
import piniaPersist from 'pinia-plugin-persist'

import './assets/scss/base/main.scss'
import * as ElIcons from '@element-plus/icons-vue'

// svg icon
import SvgIcon from './components/svgIcon/index.vue'
import 'virtual:svg-icons-register'

// 自定义指令
import importDirectives from './directives'

const pinia = createPinia()
pinia.use(piniaPersist)

const app = createApp(App)
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
