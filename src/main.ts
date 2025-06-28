import { createApp } from 'vue';
import App from './App.vue';
import router from './router/index.ts';
import pinia from './store/createPinia.ts';
import { useStore } from './store/index.ts';

// 公共样式
import './assets/style/main.scss';

// 图片懒加载: <img class="lazyload" data-src="" />
import 'lazysizes';

// 检测更新
import { checkUpdate, autoCheckUpdate } from './utils/checkUpdate.js';
autoCheckUpdate();

const app = createApp(App);
app.config.errorHandler = (err, instance, info) => {
  // eslint-disable-next-line no-console
  console.error(err, instance, info);
  checkUpdate(); // 检测更新
};
app.use(router);
app.use(pinia);

// 注册自定义指令
import registerDirectives from './directives/index.js';
registerDirectives(app);

// 注册svg-icon组件
import SvgIcon from './components/svgIcon/SvgIcon.vue';
import 'virtual:svg-icons-register';
app.component('svg-icon', SvgIcon);

// 按钮权限
import { usePermission } from './hooks/permission.js';
const { hasPermission } = usePermission();
app.config.globalProperties.$hasPermission = hasPermission;

const store = useStore();
// 登录状态，获取用户菜单
if (store.token) {
  store.getUserMenus();
}

// 挂载
app.mount('#app');

// eslint-disable-next-line no-console
console.log('vite_env:', import.meta.env);
