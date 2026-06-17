<template>
  <component :is="iconComponent" class="svg-icon" :width="size" :height="size"></component>
</template>

<script setup lang="ts">
import { defineAsyncComponent } from 'vue';

const props = defineProps({
  icon: {
    type: String,
    required: true
  },
  size: {
    type: [String, Number],
    default: '1em'
  }
});

const iconComponent = defineAsyncComponent(() => import(`@/assets/icon/${props.icon}.svg`));
</script>

<style lang="scss">
.svg-icon {
  vertical-align: middle;
  fill: currentColor;
}
</style>
