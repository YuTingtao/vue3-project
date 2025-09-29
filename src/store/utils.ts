import type { RouteRecordRaw } from 'vue-router';

// 数组转对象: key为name
function getMenuObj(tree: RouteRecordRaw[]): Record<string, RouteRecordRaw> {
  const result: Record<string, RouteRecordRaw> = {};
  function handle(node: RouteRecordRaw) {
    // 以name或者path为key
    result[(node.name || node.path) as string] = node;
    if (Array.isArray(node.children)) {
      node.children.forEach(item => handle(item));
    }
  }
  tree.forEach(item => handle(item));
  return result;
}

// 第一个菜单
function getFirstMenu(menu: RouteRecordRaw[]): string {
  let result;
  function handle(node: RouteRecordRaw) {
    if (node.children && node.children.length > 0) {
      handle(node.children[0]);
    } else {
      result = node.path;
    }
  }
  handle(menu[0]);
  return result || '/login';
}

export { getMenuObj, getFirstMenu };
