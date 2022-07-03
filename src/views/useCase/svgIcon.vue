<template>
    <div class="">
        <div class="icon-box">
            <svg-icon name="case" size="16px"></svg-icon>
            <span> svg-icon案例</span>
        </div>
    </div>
</template>

<script setup>
import { ref, reactive } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { useStore } from 'vuex'

const router = useRouter()
const route = useRoute()
const store = useStore()

let richText = ref('<p>123</p>')
</script>

<style lang="scss" scoped>

</style>
