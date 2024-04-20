// 菜单树转对象: name为key
function getMenuObj(menus, obj = {}) {
  menus.forEach(item => {
    if (item.path) {
      obj[item.path] = item
    }
    if (Array.isArray(item.children)) {
      return getMenuObj(item.children, obj)
    }
  })
  return obj
}

// 获取第一个菜单name
function getFirstMenu(menu) {
  if (Array.isArray(menu.children)) {
    return getFirstMenu(menu.children[0])
  } else {
    return menu.path || '/login'
  }
}

export {
  getMenuObj,
  getFirstMenu
}