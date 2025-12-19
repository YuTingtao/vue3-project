<template>
  <div>
    <!-- svg-icon -->
    <h3 class="row-title">svg-icon:</h3>
    <div class="row-box flex-wrap">
      <div
        v-for="(item, index) in svgIcons"
        :key="index"
        class="svg-icon-box"
        @click="copySvgIcon(item)">
        <svg-icon :icon="item"></svg-icon>
        <span>{{ item }}</span>
      </div>
    </div>

    <h3 class="row-title">QuillEditor富文本编辑器:</h3>
    <div class="row-box">
      <VueQuill v-model:content="richText"></VueQuill>
    </div>

    <h3 class="row-title">命令式图片预览：</h3>
    <div class="row-box">
      <el-button type="primary" @click="viewImg(urlList)">预览</el-button>
    </div>

    <h3 class="row-title">文本溢出tooltip提示：</h3>
    <div class="row-box" style="width: 400px">
      <ellipsis-tooltip
        content="这是文本溢出tooltip提示，这是文本溢出tooltip提示，这是文本溢出tooltip提示。">
      </ellipsis-tooltip>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import VueQuill from '@/components/richEditor/VueQuill.vue';
import viewImg from '@/components/imgView/index.ts';
import { copyText } from '@/utils/index.ts';

// svg-icon
const svgIcons = ref<string[]>([]);
const svgFiles = import.meta.glob('@/assets/icon/**/*.svg', { eager: true });
for (const path in svgFiles) {
  const name = path.replace(/(.*\/)*([^.]+).*/gi, '$2');
  svgIcons.value.push(name);
}

// 复制svg-icon
function copySvgIcon(name: string) {
  copyText(`<svg-icon icon="${name}"></svg-icon>`);
  ElMessage.success('已复制到剪切板');
}

// 富文本
const richText = ref<string>('');
onMounted(() => {
  richText.value = '<p>这是一个富文本编辑器的示例内容。</p>';
});

// 图片地址
const urlList = ref([
  'https://img2.baidu.com/it/u=2193238619,3962578777&fm=253&fmt=auto&app=120&f=JPEG?w=1067&h=800',
  'https://img0.baidu.com/it/u=2099628,2438611947&fm=253&fmt=auto&app=138&f=JPEG?w=755&h=500'
]);
</script>

<style lang="scss" scoped>
.row-title {
  font-size: 16px;
  margin-bottom: 10px;
}
.row-box {
  margin-bottom: 30px;
}

.flex-wrap {
  display: flex;
  flex-wrap: wrap;
}
.svg-icon-box {
  margin: 0 20px 20px 0;
  min-width: 80px;
  text-align: center;
  cursor: pointer;
  .svg-icon {
    display: block;
    margin: 0 auto 5px auto;
    font-size: 20px;
  }
}
</style>
