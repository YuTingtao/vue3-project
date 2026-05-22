<template>
  <el-tooltip :visible="visible" :content="content" :placement="placement" :effect="effect">
    <div
      :class="lines > 1 ? 'ellipsis-tooltip-multiline' : 'ellipsis-tooltip'"
      :style="{ '--lines': lines }"
      @mouseenter="onMouseEnter($event)"
      @mouseleave="onMouseLeave($event)">
      <slot>{{ content }}</slot>
    </div>
  </el-tooltip>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const props = withDefaults(
  defineProps<{
    content: string;
    lines?: number;
    placement?: string;
    effect?: string;
  }>(),
  {
    lines: 1,
    placement: 'top',
    effect: 'dark'
  }
);

const visible = ref(false);

function onMouseEnter(event: MouseEvent) {
  const target = event.target as HTMLElement;
  if (props.lines > 1) {
    visible.value = target.scrollHeight > target.offsetHeight;
  } else {
    visible.value = target.scrollWidth > target.offsetWidth;
  }
}

function onMouseLeave(event: MouseEvent) {
  visible.value = false;
}
</script>

<style lang="scss">
.ellipsis-tooltip {
  display: inline-block;
  max-width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.ellipsis-tooltip-multiline {
  display: -webkit-box;
  max-width: 100%;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: var(--lines);
  line-clamp: var(--lines);
  overflow: hidden;
  white-space: wrap;
}
</style>
