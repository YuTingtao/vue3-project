// 模块自动导入
const modules = import.meta.glob('./modules/*.js', { eager: true });
const obj = {};

for (const path in modules) {
  // console.log(path, modules[path].default)
  const key = path.replace(/(.*\/)*([^.]+).*/gi, '$2');
  obj[key] = modules[path].default;
}


// 注册自定义指令
function importDirectives(app) {
  for (const key in obj) {
    app.directive(key, obj[key]);
  }
}

export default importDirectives;