<template>
  <el-pagination class="app-pagination" v-bind="_attrs">
    <template v-for="(_, name) in $slots" :key="name" #[name]="scope">
      <slot v-if="name" :name="name" v-bind="scope"></slot>
    </template>
  </el-pagination>
</template>

<script setup lang="ts">
import { computed, useAttrs } from 'vue';
import type { PaginationEmits, PaginationProps } from 'element-plus';

type Attrs = Partial<PaginationProps> & Partial<PaginationEmits>;

const attrs: Attrs = useAttrs();
const _attrs = computed(() => {
  return {
    pageSizes: [10, 20, 50, 100],
    layout: 'prev, pager, next, jumper',
    background: true,
    ...attrs
  };
});
</script>

<style lang="scss">
.app-pagination {
  justify-content: center;
  margin-top: 20px;
  .el-select {
    width: 100px;
  }
}
</style>
