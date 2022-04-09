<template>
    <template v-for="item in menus" :key="item.id">
        <template v-if="!item.hidden">
            <el-menu-item v-if="!item.children || item.children.filter(item => !item.hidden).length < 1" 
                :index="item.redirect || item.path">
                <el-icon v-if="item.icon"><component :is="item.icon"></component></el-icon>
                <span>{{ item.title }}</span>
            </el-menu-item>
            <el-sub-menu v-else :index="item.redirect || item.path">
                <template #title>
                    <el-icon v-if="item.icon"><component :is="item.icon"></component></el-icon>
                    <span>{{ item.title }}</span>
                </template>
                <menu-item :menus="item.children"></menu-item>
            </el-sub-menu>
        </template>
    </template>
</template>

<script setup>
const props = defineProps({
    menus: {
        type: Array,
        default: () => []
    }
})
</script>

<style lang="" scoped>

</style>