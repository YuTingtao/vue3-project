import { createApp } from 'vue';
import App from './App.vue';
import router from './router/index.ts';
import pinia from './store/createPinia.ts';
import { useStore } from './store/index.ts';
import registerDirectives from './directives/index.ts';
import SvgIcon from './components/svgIcon/index.vue';
import 'virtual:svg-icons-register';
import { usePermission } from './hooks/permission.ts';

// 公共样式
import './assets/style/main.scss';

// 检测更新
import { checkUpdate, autoCheckUpdate } from './utils/checkUpdate.ts';
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
registerDirectives(app);

// 注册svg-icon组件
app.component('svg-icon', SvgIcon);

// 按钮权限
const { hasPermission } = usePermission();
app.config.globalProperties.$hasPermission = hasPermission;

const store = useStore();
// 登录状态，获取用户菜单
if (store.token) {
  store.getUserMenus();
}

// 挂载
app.mount('#app');
