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
    title?: string;
    icon?: string;
    buttons?: {
      name: string;
      title: string;
    }[];
    activePath?: string;
    parentPath?: string;
  }
}
