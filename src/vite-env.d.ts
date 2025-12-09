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
    title: string; // 菜单标题
    icon?: string; // 菜单图标
    hidden?: 0 | 1; // 是否隐藏菜单
    buttons?: {
      name: string;
      title: string;
    }[]; // 按钮权限
    activePath?: string; // 菜单高亮path
    parentPath?: string; // 父级path
    needAuth?: boolean; // 是否需要权限验证
  }
}
