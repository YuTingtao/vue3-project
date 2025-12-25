import type { DefineComponent } from 'vue';
import type { PaginationProps, PaginationEmits } from 'element-plus';

declare module 'vue' {
  interface GlobalComponents {
    AppPagination: DefineComponent<
      Partial<PaginationProps>,
      object,
      object,
      object,
      object,
      object,
      object,
      PaginationEmits
    >;
  }
}

export {};
