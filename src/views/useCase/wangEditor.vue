<template>
    <div class="">
        <editor ref="editorRef" v-model="richText"></editor>
        <div style="margin: 10px 0;">{{ richText }}</div>
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

const editorRef = ref()

let richText = ref('<p>12345</p>')

function setHtml() {
    editorRef.value.setHtml(`<p>设置内容：${Date.now()}</p>`);
}
function getHtml() {
    ElMessageBox.alert(editorRef.value.getHtml(), '富文本', {
        confirmButtonText: '确定',
    });
}
function insertText() {
    editorRef.value.insertText('${}');
}
</script>

<style lang="scss" scoped>

</style>
