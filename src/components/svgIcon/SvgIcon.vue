<template>
  <component
    :is="iconComponent"
    class="svg-icon"
    :width="width || size"
    :height="height || size"></component>
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
  },
  width: {
    type: [String, Number]
  },
  height: {
    type: [String, Number]
  }
});

const iconComponent = defineAsyncComponent(
  () => import(`@/assets/icon/${props.icon}.svg?component`)
);
</script>

<style lang="scss">
.svg-icon {
  vertical-align: middle;
  fill: currentColor;
}
</style>
