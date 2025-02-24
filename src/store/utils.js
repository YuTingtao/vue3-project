// 数组转对象: key为name
function getMenuObj(tree) {
  const result = {}
  function handle(node) {
    result[node.name] = node
    if (Array.isArray(node.children)) {
      node.children.forEach(item => handle(item))
    }
  }
  tree.forEach(item => handle(item))
  return result
}

// 获取第一个菜单
function getFirstMenu(menu) {
  let result
  function handle(node) {
    if (node.children && node.children.length > 0) {
      handle(node.children[0])
    } else {
      result = node.path
    }
  }
  handle(menu)
  return result || '/login'
}

// 递归添加路由
import router from '@/router'
import { defineAsyncComponent } from 'vue'
function addRoutes(routes, name = 'layout') {
  routes.forEach(item => {
    router.addRoute(name, {
      path: item.path,
      name: item.name,
      component: defineAsyncComponent(() => import(`@/views/${item.component}`)),
      meta: {
        title: item.meta.title,                 // 标题
        icon: item.meta.icon,                   // 图标
        visible: item.meta.visible,             // 是否可见
        buttons: item.meta.buttons || [],       // 按钮权限
        activePath: item.meta.activePath || '', // 设置高亮菜单路径，例如详情页设置列表页高亮
        parentPath: item.meta.parentPath || '', // 设置面包屑父级路径
      }
    })
    // 当前路由匹配时，手动导航
    if (router.currentRoute.value.path == item.path) {
      router.replace(router.currentRoute.value.fullPath)
    }
    // 递归添加子路由
    if (item.children && item.children.length > 0) {
      addRoutes(item.children, item.name)
    }
  })
}

export {
  getMenuObj,
  getFirstMenu,
  addRoutes
}