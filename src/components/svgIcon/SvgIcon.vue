<template>
  <svg class="svg-icon" aria-hidden="true" :width="size" :height="size">
    <use :xlink:href="symbolId" rel="external nofollow" :fill="color" />
  </svg>
</template>

<script setup lang="ts">
import { computed } from 'vue';
defineOptions({
  name: 'SvgIcon'
});

const props = defineProps({
  icon: {
    type: String,
    required: true
  },
  size: {
    type: [String, Number],
    default: '1em'
  },
  color: {
    type: String,
    default: 'currentColor'
  },
  prefix: {
    type: String,
    default: 'icon'
  }
});
const symbolId = computed(() => {
  return `#${props.prefix}-${props.icon}`;
});
</script>

<style lang="scss">
.svg-icon {
  vertical-align: middle;
}
</style>
