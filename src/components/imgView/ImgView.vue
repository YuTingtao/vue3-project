<!-- 图片预览组件 -->
<template>
  <el-image-viewer v-if="modelValue" :url-list="urlList" @close="emit('update:modelValue', false)"></el-image-viewer>
</template>

<script setup>
import { ref } from 'vue';

const props = defineProps({
  modelValue: {
    type: Boolean,
    default: false
  },
  urlList: {
    type: Array,
    default: () => []
  }
});
const emit = defineEmits(['update:modelValue']);
</script>

<style lang="scss"></style>
