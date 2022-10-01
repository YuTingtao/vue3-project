<!-- 全局layout -->
<template>
    <div class="g-header">
        <router-link class="g-logo" to="/">
            <img src="../assets/img/logo.png" alt="" />
            <h2>管理后台</h2>
        </router-link>
        <div class="g-header-right">
            <el-dropdown trigger="hover">
                <div>
                    <el-avatar
                        :src="userInfo.avatar"
                        :size="34"
                        icon="UserFilled"
                        shape="circle"
                        fit="cover"></el-avatar>
                    <span>{{ userInfo.realName || userInfo.nickName }}</span>
                    <el-icon>
                        <arrow-down />
                    </el-icon>
                </div>
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
        <div class="g-aside">
            <el-scrollbar>
                <el-menu :default-active="$route.meta.activePath || $route.path" router>
                    <MenuItem :menus="menus"></MenuItem>
                </el-menu>
            </el-scrollbar>
        </div>
        <router-view class="g-page"></router-view>
    </div>
</template>

<script setup>
import { ref, reactive, computed, watch } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { useStore } from 'vuex'
import MenuItem from './components/menu-item.vue'

const router = useRouter()
const route = useRoute()
const store = useStore()

// 用户信息
const userInfo = computed(() => store.state.userInfo)
// 菜单数组
const menus = computed(() => store.state.menus)

// 退出登录
function Logout() {
    store.commit('setLogout')
    router.replace('/login')
}
</script>
