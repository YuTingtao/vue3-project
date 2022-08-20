import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index'
import store from './store/index'

import './assets/scss/base/main.scss'
import * as ElIcons from '@element-plus/icons-vue'
import SvgIcon from './components/svgIcon/index.vue'
import 'virtual:svg-icons-register'

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
app.mount('#app')
