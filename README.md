# 介绍
vue3 + vite + vue-router + pinia + element-plus 项目模板，支持自定义主题色，菜单按钮权限，版本更新提示，svg-icon组件，axios拦截

## 目录结构
```
├── public
├── src
│   ├── api 接口请求
│   ├── assets 静态资源
│   ├── common 公共方法
│   │   ├── directives 指令
│   │   ├── hooks 组合式hooks
│   │   └── utils 工具
│   ├── components 公共基础组件，此目录下组件会被自动导入，无需手动引入
│   ├── router 路由
│   ├── store 状态管理
│   ├── views 组件
│   ├── App.vue
│   ├── env.d.ts
│   └── main.js
├── auto-imports.d.ts element-plus按需自动导入生成文件
├── index.html
└── vite.config.js
```

## 包管理工具pnpm
pnpm i
pnpm run dev
pnpm run build