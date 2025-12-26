import { QuillEditor } from '@vueup/vue-quill';

declare module 'vue' {
  interface GlobalComponents {
    RichEditor: typeof QuillEditor;
  }
}

export {};
