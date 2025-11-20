import type { App, Directive } from 'vue';

// 模块自动导入
const modules = import.meta.glob(['./modules/*.js', './modules/*.ts'], { eager: true });
const obj: Record<string, Directive> = {};

for (const path in modules) {
  // console.log(path, modules[path].default)
  const key = path.replace(/(.*\/)*([^.]+).*/gi, '$2');
  obj[key] = (modules[path] as { default: Directive }).default;
}

// 批量注册自定义指令
export default function registerDirectives(app: App) {
  for (const key in obj) {
    if (obj[key]) {
      app.directive(key, obj[key]);
    }
  }
}
