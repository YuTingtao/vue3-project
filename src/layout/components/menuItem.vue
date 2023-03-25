<template>
  <template v-for="item in menus" :key="item.name">
    <template v-if="!item.hidden">
      <el-sub-menu
        v-if="item.children && item.children.filter(item => !item.hidden).length"
        :index="item.path || item.redirect">
        <template #title>
          <el-icon v-if="item.icon">
            <component :is="item.icon"></component>
          </el-icon>
          <span>{{ item.title }}</span>
        </template>
        <menu-item :menus="item.children"></menu-item>
      </el-sub-menu>
      <el-menu-item v-else :index="item.path || item.redirect">
        <el-icon v-if="item.icon">
          <component :is="item.icon"></component>
        </el-icon>
        <span>{{ item.title }}</span>
      </el-menu-item>
    </template>
  </template>
</template>

<script setup>
const props = defineProps({
  menus: {
    type: Array,
    default: () => []
  }
})
</script>

<style lang="scss" scoped>
</style>
