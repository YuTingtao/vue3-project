import { createApp } from 'vue';
import App from './App.vue';
import router from './router/index.ts';
import pinia from './store/createPinia.ts';

// 公共样式
import './assets/style/main.scss';

const app = createApp(App);
app.use(router);
app.use(pinia);

// 注册自定义指令
import registerDirectives from './directives/index.js';
registerDirectives(app);

// 注册svg-icon组件
import SvgIcon from './components/svgIcon/SvgIcon.vue';
import 'virtual:svg-icons-register';
app.component('svg-icon', SvgIcon);

// 挂载
app.mount('#app');
