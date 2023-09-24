<template>
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
      <menu-item
        v-for="item2 in item.children" :key="item2.name" 
        :item="item2">
      </menu-item>
    </el-sub-menu>
    <el-menu-item v-else :index="item.path || item.redirect">
      <el-icon v-if="item.icon">
        <component :is="item.icon"></component>
      </el-icon>
      <span>{{ item.title }}</span>
    </el-menu-item>
  </template>
</template>

<script setup>
const props = defineProps({
  item: {
    type: Array,
    default: () => {}
  }
})
</script>

<style lang="scss" scoped>
</style>
