/* eslint-disable spaced-comment */
/// <reference types="vite/client" />

export {};

declare module 'vue' {
  interface ComponentCustomProperties {
    $hasPermission: (permission: string, route?: string) => boolean;
  }
}

declare module 'vue-router' {
  interface RouteMeta {
    title?: string; // 菜单标题
    icon?: string; // 菜单图标
    buttons?: {
      name: string;
      title: string;
    }[]; // 按钮权限
    activePath?: string; // 菜单高亮path
    parentPath?: string; // 父级path
    needAuth?: boolean; // 是否需要权限验证
  }
}
