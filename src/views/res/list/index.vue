<template>
    <div class="res-list">
        <div class="icon-box">
            <svg-icon name="case"></svg-icon>
            <span> 素材列表</span>
        </div>
    </div>
</template>

<script setup>
import { ref, reactive, computed } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { useStore } from 'vuex'

const router = useRouter()
const route = useRoute()
const store = useStore()

</script>

<style lang="scss" scoped>

</style>
