<template>
    <img :src="src" :alt="alt" :onerror="imgOnError">
</template>

<script setup>
const props = defineProps({
    src: {
        type: String,
        default: ''
    },
    alt: {
        type: String,
        default: ''
    },
    errorSrc: {
        type: String,
        default: ''
    }
})

function imgOnError(e) {
    if (props.errorSrc) {
        let img = e.srcElement;
        img.src = props.errorSrc;
        img.onerror = null; // 防止无限循环
    }
}
</script>

<style lang="scss">

</style>
