<template>
  <component :is="iconComponent" class="svg-icon" :width="width" :height="height"></component>
</template>

<script setup lang="ts">
import { defineAsyncComponent } from 'vue';

const props = defineProps({
  icon: {
    type: String,
    required: true
  },
  width: {
    type: [String, Number],
    default: '1em'
  },
  height: {
    type: [String, Number],
    default: '1em'
  }
});

const iconComponent = defineAsyncComponent(() => import(`@/assets/icon/${props.icon}.svg?component`));
</script>

<style lang="scss">
.svg-icon {
  vertical-align: middle;
  fill: currentColor;
}
</style>
