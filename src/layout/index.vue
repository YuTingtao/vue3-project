<!-- 全局layout -->
<template>
    <el-container class="g-layout">
        <el-header class="g-header">
            <router-link class="g-logo" to="/">
                <img src="../assets/img/logo.png" alt="">
                <h2>管理后台</h2>
            </router-link>
            <div class="g-header-right">
                <el-avatar :src="userInfo.facePhoto" icon="user-filled" shape="circle" fit="cover"></el-avatar>
                <el-dropdown trigger="hover">
                    {{ userInfo.realName || userInfo.nickName }}<el-icon class="el-icon--right">
                        <arrow-down />
                    </el-icon>
                    <template #dropdown>
                        <el-dropdown-menu>
                            <el-dropdown-item>用户中心</el-dropdown-item>
                            <el-dropdown-item @click="Logout">退出</el-dropdown-item>
                        </el-dropdown-menu>
                    </template>
                </el-dropdown>
            </div>
        </el-header>
        <el-container class="g-body">
            <el-scrollbar class="g-aside">
                <el-menu :default-active="$route.meta.activePath || $route.path" router>
                    <MenuItem :menus="userMenus"></MenuItem>
                </el-menu>
            </el-scrollbar>
            <el-main class="g-main">
                <router-view></router-view>
            </el-main>
        </el-container>
    </el-container>
</template>

<script setup>
import { ref, reactive, computed } from 'vue';
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
</script>

<style lang="scss">
@import '../assets/scss/base/layout.scss';
</style>
