<!-- 图片预览组件 -->
<template>
  <el-image-viewer
    v-if="modelValue"
    :url-list="urlList"
    @close="emit('update:modelValue', false)"
  />
</template>

<script setup>
import { ref } from 'vue'

defineOptions({
  name: 'ImgView'
})

const props = defineProps({
  modelValue: {
    type: Boolean,
    default: false
  },
  urlList: {
    type: Array,
    default: () => []
  }
})
const emit = defineEmits(['update:modelValue'])
</script>

<style lang="scss" scoped>

</style>
