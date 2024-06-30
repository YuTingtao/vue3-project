<template>
  <div class="page-box">
    <WhiteBoard class="my-whiteboard"></WhiteBoard>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { useStore } from '@/store'

const router = useRouter()
const route = useRoute()
const store = useStore()

</script>

<style lang="scss" scoped>
.page-box {
  height: 100%;
}
.my-whiteboard {
  height: 100%;
}
</style>
