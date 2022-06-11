import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index'
import store from './store/index'

import './assets/scss/base/reset.css'
import * as ElIcons from '@element-plus/icons-vue'

if (store.state.token) {
    store.dispatch('getMenus')
}

const app = createApp(App)
app.use(router)
app.use(store)
for (let key in ElIcons) {
    app.component(key, ElIcons[key as keyof typeof ElIcons])
}
app.mount('#app')
