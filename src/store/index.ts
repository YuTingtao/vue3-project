import { defineStore } from 'pinia';
import { getMenuObj, getFirstMenu } from './utils.ts';
import routes from '@/router/modules/index.ts';
import type { UserInfo, LoginRes } from '@/api/user/type.js';
import type { RouteRecordRaw } from 'vue-router';

export const useStore = defineStore('store', {
  state: () => ({
    token: '',
    userInfo: {} as UserInfo, // 用户信息
    userMenus: [] as RouteRecordRaw[] // 用户菜单
  }),
  getters: {
    // 菜单对象: key为path
    menuObj(state) {
      return getMenuObj(state.userMenus);
    },
    // 首个菜单
    firstMenu(state) {
      if (state.userMenus.length < 1) {
        return '/login';
      }
      return getFirstMenu(state.userMenus);
    }
  },
  actions: {
    // 登录
    setLogin(obj: LoginRes) {
      const { token, ...userInfo } = obj;
      this.token = token;
      this.userInfo = userInfo;
    },
    // 退出登录
    setLogout() {
      this.token = '';
      this.userInfo = {} as UserInfo;
      this.userMenus = [];
    },
    // 获取菜单
    getUserMenus() {
      return new Promise((resolve) => {
        setTimeout(() => {
          this.userMenus = routes;
          resolve(null);
        }, 100);
      });
    }
  },
  // 状态持久化
  persist: {
    key: 'store',
    storage: localStorage
  }
});
