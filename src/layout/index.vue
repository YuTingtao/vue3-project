<!-- 全局layout -->
<template>
    <div class="g-header">
        <router-link class="g-logo" to="/">
            <img src="../assets/img/logo.png" alt="">
            <h2>管理后台</h2>
        </router-link>
        <div class="g-header-right">
            <el-avatar :src="userInfo.avatar" icon="user-filled" shape="circle" fit="cover"></el-avatar>
            <el-dropdown trigger="hover">
                <span>
                    {{ userInfo.realName || userInfo.nickName }}
                    <el-icon>
                        <arrow-down />
                    </el-icon>
                </span>
                <template #dropdown>
                    <el-dropdown-menu>
                        <el-dropdown-item>用户中心</el-dropdown-item>
                        <el-dropdown-item @click="Logout">退出</el-dropdown-item>
                    </el-dropdown-menu>
                </template>
            </el-dropdown>
        </div>
    </div>
    <div class="g-body">
        <el-scrollbar class="g-aside">
            <el-menu :default-active="$route.meta.activePath || $route.path" router>
                <MenuItem :menus="userMenus"></MenuItem>
            </el-menu>
        </el-scrollbar>
        <div class="g-main">
            <router-view></router-view>
        </div>
    </div>
</template>

<script setup>
import { ref, reactive, computed, watch } from 'vue';
import { useRouter, useRoute } from 'vue-router';
import { useStore } from 'vuex';
import MenuItem from './components/menu-item.vue';

const router = useRouter();
const route = useRoute();
const store = useStore();

// 用户信息
const userInfo = computed(() => store.state.userInfo);
// 用户菜单
const userMenus = computed(() => store.state.userMenus);

// 退出登录
function Logout() {
    store.commit('LOGOUT');
    router.replace('/login')
}

// 路由变化，页面滚动到顶部
watch(() => route.path, () => {
    document.querySelector('.g-main').scrollTo(0, 0);
})
</script>

<style lang="scss">
@import '../assets/scss/base/layout.scss';
</style>
