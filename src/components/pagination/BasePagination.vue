<template>
  <el-pagination class="base-pagination" v-bind="_attrs">
    <template v-for="(_, name) in $slots" :key="name" #[name]="scope">
      <slot v-if="name" :name="name" v-bind="scope"></slot>
    </template>
  </el-pagination>
</template>

<script setup lang="ts">
import { computed, useAttrs } from 'vue';
import type { PaginationEmits, PaginationProps } from 'element-plus';

defineProps<Partial<PaginationProps>>();
defineEmits<PaginationEmits>();

const attrs = useAttrs();
const _attrs = computed(() => {
  return {
    pageSizes: [10, 20, 50, 100],
    layout: 'total, sizes, prev, pager, next, jumper',
    background: true,
    ...attrs
  };
});
</script>

<style lang="scss">
.base-pagination {
  justify-content: flex-end;
  margin-top: 20px;
  .el-select {
    width: 100px;
  }
}
</style>
