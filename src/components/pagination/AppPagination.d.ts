import { ElPagination } from 'element-plus';

declare module 'vue' {
  interface GlobalComponents {
    AppPagination: typeof ElPagination;
  }
}

export {};
