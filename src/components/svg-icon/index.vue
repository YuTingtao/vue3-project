<template>
    <svg class="svg-icon" aria-hidden="true" :width="size" :height="size">
        <use :xlink:href="symbolId" rel="external nofollow" :fill="color" />
    </svg>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
    prefix: {
        type: String,
        default: 'icon',
    },
    name: {
        type: String,
        required: true,
    },
    color: {
        type: String,
        default: 'currentColor',
    },
    size: {
        type: String,
        default: '1em',
    },
})
const symbolId = computed(() => `#${props.prefix}-${props.name}`)
</script>

<style lang="scss">
.svg-icon{
    line-height: 1em;
    vertical-align: text-top;
}
</style>
