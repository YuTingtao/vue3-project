// 菜单树转对象: name为key
function getMenuObj(menus, obj = {}) {
  menus.forEach(item => {
    if (item.path) {
      obj[item.path] = {
        name: item.name,
        buttons: item.buttons || []
      }
    }
    if (Array.isArray(item.children)) {
      return getMenuObj(item.children, obj)
    }
  })
  return obj
}

// 获取第一个菜单路径
function getFirstPath(menu) {
  let path = menu?.path || '/login'
  if (Array.isArray(menu.children)) {
    path = getFirstPath(menu.children[0], path)
  }
  return path
}

export {
  getMenuObj,
  getFirstPath
}