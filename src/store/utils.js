// 获取菜单按钮(多级转为一级)
function getFlatMenus(menus, obj = {}) {
  menus.forEach(item => {
    if (item.path) {
      obj[item.path] = item.buttons || []
    }
    if (item.children && item.children.length > 0) {
      return getFlatMenus(item.children, obj)
    }
  })
  return obj
}

// 获取第一个菜单路径
function getFirstPath(menu, path = '/login') {
  if (menu) {
    path = menu.path
    if (menu.children && menu.children.length > 0) {
      return getFirstPath(menu.children[0], path)
    }
  }
  return path
}

export {
  getFlatMenus,
  getFirstPath
}