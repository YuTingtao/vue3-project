<template>
  <div class="wang-editor">
    <Toolbar :editor="editorRef" :defaultConfig="toolbarConfig" :mode="mode" />
    <Editor
      style="overflow-y: hidden"
      v-model="richText"
      :defaultConfig="editorConfig"
      :mode="mode"
      @onCreated="handleCreated"
      @onChange="handleChange" />
  </div>
</template>

<script setup>
import '@wangeditor/editor/dist/css/style.css'
import { onBeforeUnmount, ref, shallowRef, watch } from 'vue'
import { Editor, Toolbar } from '@wangeditor/editor-for-vue'

const props = defineProps({
  modelValue: {
    Type: String,
    default: ''
  },
  placeholder: {
    Type: String,
    default: '请输入内容...'
  },
  maxLength: {
    Type: Number,
    default: null
  },
  mode: {
    Type: String,
    default: 'simple' // default,simple
  }
})
const emit = defineEmits(['update:modelValue'])

// 富文本内容
const richText = ref(props.modelValue)
watch(() => props.modelValue, (val) => {
  richText.value = val
})
// 编辑器ref
const editorRef = shallowRef()

const toolbarConfig = ref({
  modalAppendToBody: true
})
const editorConfig = ref({
  placeholder: props.placeholder,
  maxLength: props.maxLength,
  autoFocus: false,
  MENU_CONF: {
    uploadImage: {
      server: '/api/upload'
      // 自定义上传
      // async customUpload(file, insertFn) {
      //     let url = '';
      //     insertFn(url)
      // }
    },
    uploadVideo: {
      server: '/api/upload'
      // 自定义上传
      // async customUpload(file, insertFn) {
      //     let url = '';
      //     insertFn(url)
      // }
    }
  }
})

// 组件销毁时，也及时销毁编辑器
onBeforeUnmount(() => {
  const editor = editorRef.value
  if (editor == null) return
  editor.destroy()
})

function handleCreated(editor) {
  editorRef.value = editor // 记录 editor 实例，重要！
}

function handleChange(editor) {
  emit('update:modelValue', editor.getHtml())
}

// 获取富文本
function getHtml() {
  const editor = editorRef.value
  if (editor == null) return
  return editor.getHtml()
}

// 获取纯文本
function getText() {
  const editor = editorRef.value
  if (editor == null) return
  return editor.getText()
}

// 设置富文本
function setHtml(html) {
  const editor = editorRef.value
  if (editor == null) return
  editor.setHtml(html)
}

// 插入文本
function insertText(txt) {
  const editor = editorRef.value
  if (editor == null) return
  editor.insertText(txt)
}

defineExpose({
  getHtml,
  setHtml,
  getText,
  insertText
})
</script>

<style lang="scss">
.wang-editor {
  .w-e-bar {
    border: 1px solid var(--el-border-color);
    border-radius: 4px 4px 0 0;
  }
  .w-e-text-container {
    border-left: 1px solid var(--el-border-color);
    border-bottom: 1px solid var(--el-border-color);
    border-right: 1px solid var(--el-border-color);
    border-radius: 0 0 4px 4px;
    [data-slate-editor] {
      padding: 5px 10px;
      p {
        margin: 5px 0;
      }
    }
  }
  .w-e-scroll > div {
    min-height: 150px;
  }
  .w-e-text-placeholder {
    top: 12px;
    font-style: normal;
  }
}
.w-e-modal {
  top: 50% !important;
  left: 50% !important;
  transform: translate(-50%, -50%);
}
</style>
