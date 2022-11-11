<template>
  <div class="page-svg">
    <div class="icon-box">
      <svg-icon name="case" size="16px"></svg-icon>
      <span> svg-icon案例</span>
    </div>
    <div>访问时间：{{ formatDate(Date.now()) }}</div>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { useStore } from '@/store'
import { formatDate } from '@/utils'

const router = useRouter()
const route = useRoute()
const store = useStore()
</script>

<style lang="scss" scoped>
.page-svg {
  .icon-box {
    margin-bottom: 15px;
  }
}
</style>
