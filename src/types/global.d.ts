// src/types/global.d.ts
import 'vue';

declare module 'vue' {
  interface ComponentCustomProperties {
    $hasPermission: (permission: string) => boolean;
  }
}
