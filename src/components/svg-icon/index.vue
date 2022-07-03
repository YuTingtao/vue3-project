<template>
    <svg class="svg-icon" aria-hidden="true" :width="size" :height="size">
        <use :xlink:href="symbolId" rel="external nofollow" :fill="color" />
    </svg>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
    name: {
        type: String,
        required: true,
    },
    size: {
        type: String,
        default: '1em',
    },
    color: {
        type: String,
        default: 'currentColor',
    },
    prefix: {
        type: String,
        default: 'icon',
    },
})
const symbolId = computed(() => `#${props.prefix}-${props.name}`)
</script>

<style lang="scss">
.svg-icon{
    line-height: 1em;
    vertical-align: middle;
}
</style>
