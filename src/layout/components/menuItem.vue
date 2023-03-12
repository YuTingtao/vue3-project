<template>
  <template v-for="item in menus" :key="item.name">
    <template v-if="store.flatMenuPaths.includes(item.path) && !item.meta.hidden">
      <el-menu-item
        v-if="!item.children || item.children.filter(item => !item.meta.hidden).length < 1"
        :index="item.path || item.redirect">
        <el-icon v-if="item.meta.icon">
          <component :is="item.meta.icon"></component>
        </el-icon>
        <span>{{ item.meta.title }}</span>
      </el-menu-item>
      <el-sub-menu v-else :index="item.path || item.redirect">
        <template #title>
          <el-icon v-if="item.meta.icon">
            <component :is="item.meta.icon"></component>
          </el-icon>
          <span>{{ item.meta.title }}</span>
        </template>
        <menu-item :menus="item.children"></menu-item>
      </el-sub-menu>
    </template>
  </template>
</template>

<script setup>
import { useStore } from '@/store'

const store = useStore()

const props = defineProps({
  menus: {
    type: Array,
    default: () => []
  }
})
</script>

<style lang="scss" scoped>
</style>
