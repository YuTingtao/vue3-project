import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index'
import store from './store/index'

import './assets/scss/base/main.scss'
import * as ElIcons from '@element-plus/icons-vue'

// svg icon
import SvgIcon from './components/svgIcon/index.vue'
import 'virtual:svg-icons-register'

// 自定义指令
import errorDirective from '@/directives/error.js'

if (store.state.token) {
    store.dispatch('getMenus')
}

const app = createApp(App)
app.use(router)
app.use(store)
for (let key in ElIcons) {
    app.component(key, ElIcons[key])
}
app.component('svg-icon', SvgIcon)
app.directive('error', errorDirective)
app.mount('#app')
