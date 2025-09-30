<template>
  <QuillEditor ref="editorRef" v-bind="_attrs">
    <template v-for="(_, name) in $slots" :key="name" #[name]="scope">
      <slot v-if="name" :name="name" v-bind="scope"></slot>
    </template>
  </QuillEditor>
</template>

<script setup lang="ts">
import { ref, computed, useAttrs, onBeforeUnmount } from 'vue';
import { QuillEditor, type Delta } from '@vueup/vue-quill';
import '@vueup/vue-quill/dist/vue-quill.snow.css';
import BlotFormatter from 'quill-blot-formatter';
import ImageUploader from 'quill-image-uploader';
import axios from 'axios';

defineOptions({
  inheritAttrs: false
});

const attrs = useAttrs();
const _attrs = computed(() => {
  return {
    theme: 'snow' as const,
    contentType: 'html' as const,
    options: { debug: 'error' },
    toolbar: [
      [{ font: [] }, { header: [1, 2, 3, false] }],
      ['bold', 'italic', 'underline', 'strike', 'clean'],
      [{ color: [] }, { background: [] }],
      [{ align: [] }, { list: 'ordered' }, { list: 'bullet' }, { indent: '-1' }, { indent: '+1' }],
      ['link', 'image', 'video']
    ],
    modules: [
      { name: 'blotFormatter', module: BlotFormatter },
      {
        name: 'imageUploader',
        module: ImageUploader,
        options: {
          upload: (file: File) => {
            return new Promise((resolve, reject) => {
              const formData = new FormData();
              formData.append('image', file);
              axios
                .post('/api/upload', formData)
                .then(res => {
                  resolve(res.data.url);
                })
                .catch(err => {
                  reject('Upload failed');
                });
            });
          }
        }
      }
    ],
    ...attrs
  };
});

const editorRef = ref();

onBeforeUnmount(() => {
  // 删除插入的img
  const tempImg = document.querySelector('.blot-formatter__proxy-image') as HTMLImageElement;
  if (tempImg) {
    document.body.removeChild(tempImg);
  }
});

function getHTML(): string {
  return editorRef.value?.getHTML();
}
function setHTML(html: string) {
  return editorRef.value?.setHTML(html);
}
function pasteHTML(html: string, source: 'api' | 'user' | 'silent') {
  return editorRef.value?.pasteHTML(html, source);
}
function getText(index?: number, length?: number): string {
  return editorRef.value?.getText(index, length);
}
function setText(text: string) {
  return editorRef.value?.setText(text);
}

function getEditor(): Element {
  return editorRef.value?.getEditor();
}
function getToolbar(): Element {
  return editorRef.value?.getToolbar();
}
function getQuill() {
  return editorRef.value?.getQuill();
}
function getContents(index?: number, length?: number): string | Delta {
  return editorRef.value?.getContents(index, length);
}
function setContents(content: string | Delta, source: 'api' | 'user' | 'silent') {
  return editorRef.value?.setContents(content, source);
}

defineExpose({
  getHTML,
  setHTML,
  pasteHTML,
  getText,
  setText,
  getEditor,
  getToolbar,
  getQuill,
  getContents,
  setContents
});
</script>

<style lang="scss">
.ql-container {
  font-size: 14px;
}
.ql-snow .ql-tooltip {
  z-index: 100;
}
</style>
