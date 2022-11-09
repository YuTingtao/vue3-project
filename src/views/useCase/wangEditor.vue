<template>
  <div class="page-editor">
    <editor ref="editorRef" v-model="richText" :maxLength="1000"></editor>
    <div style="margin: 10px 0">{{ richText }}</div>
    <div>
      <el-button type="primary" @click="setHtml">设置富文本</el-button>
      <el-button type="primary" @click="getHtml">获取富文本</el-button>
      <el-button type="primary" @click="insertText">插入纯文本</el-button>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { useStore } from 'vuex'

const router = useRouter()
const route = useRoute()
const store = useStore()

// 编辑器ref
const editorRef = ref()

let richText = ref('<p>老王编辑器</p>')

function setHtml() {
  editorRef.value.setHtml(`<p>设置内容：${Date.now()}</p>`)
}

function getHtml() {
  ElMessageBox.alert(editorRef.value.getHtml(), '富文本', {
    confirmButtonText: '确定'
  })
}

function insertText() {
  editorRef.value.insertText(`纯文本${Math.random()}`)
}
</script>

<style lang="scss" scoped>

</style>
