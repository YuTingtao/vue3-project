<template>
    <div class="res-list">
        资源列表
    </div>
</template>

<script setup>
import { ref, reactive, computed } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { useStore } from 'vuex'

const router = useRouter();
const route = useRoute();
const store = useStore();

</script>

<style lang="scss" scoped>

</style>