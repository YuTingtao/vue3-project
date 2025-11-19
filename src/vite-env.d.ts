/* eslint-disable spaced-comment */
/// <reference types="vite/client" />

export {};
declare module 'vue' {
  interface ComponentCustomProperties {
    $hasPermission: (permission: string) => boolean;
  }
}
