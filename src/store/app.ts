import { defineStore } from 'pinia';

export const useAppStore = defineStore('appStore', {
  state: () => ({
    // 菜单
    menu: {
      isExpand: true // 是否展开
    }
  }),
  getters: {},
  actions: {},
  // 状态持久化
  persist: {
    key: 'appStore',
    storage: localStorage
  }
});
