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
import { ref, shallowRef, watch, onBeforeUnmount } from 'vue'
import { DomEditor } from '@wangeditor/editor'
import { Editor, Toolbar } from '@wangeditor/editor-for-vue'

defineOptions({
  name: 'WangEditor'
})

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
    default: 'default' // default, simple
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

// 工具栏配置
const toolbarConfig = ref({
  modalAppendToBody: true,
  toolbarKeys: [
    'blockquote',
    'header1',
    'header2',
    'header3',
    '|',
    'bold',
    'underline',
    'italic',
    'through',
    'color',
    'bgColor',
    'clearStyle',
    '|',
    'bulletedList',
    'numberedList',
    'todo',
    'justifyLeft',
    'justifyRight',
    'justifyCenter',
    '|',
    'insertLink',
    {
      'key': 'group-image',
      'title': '图片',
      // eslint-disable-next-line max-len
      'iconSvg': '<svg viewBox="0 0 1024 1024"><path d="M959.877 128l0.123 0.123v767.775l-0.123 0.122H64.102l-0.122-0.122V128.123l0.122-0.123h895.775zM960 64H64C28.795 64 0 92.795 0 128v768c0 35.205 28.795 64 64 64h896c35.205 0 64-28.795 64-64V128c0-35.205-28.795-64-64-64zM832 288.01c0 53.023-42.988 96.01-96.01 96.01s-96.01-42.987-96.01-96.01S682.967 192 735.99 192 832 234.988 832 288.01zM896 832H128V704l224.01-384 256 320h64l224.01-192z"></path></svg>',
      'menuKeys': [
        'insertImage',
        'uploadImage'
      ]
    },
    'insertVideo',
    'insertTable',
    'codeBlock', // 代码块
    '|',
    'undo',
    'redo',
    '|',
    'fullScreen'
  ]
})

// 编辑器配置
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

// 创建时
function handleCreated(editor) {
  editorRef.value = editor // 记录 editor 实例，重要！
}

function handleChange(editor) {
  // 获取toolbar config
  // const toolbar = DomEditor.getToolbar(editor)
  // console.log('toolbarKeys:', toolbar.getConfig().toolbarKeys)
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
    min-height: 300px;
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
