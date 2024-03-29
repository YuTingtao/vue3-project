// 菜单树转对象: name为key
function getMenuObj(menus, obj = {}) {
  menus.forEach(item => {
    if (item.name) {
      obj[item.name] = {
        path: item.path,
        buttons: item.buttons || []
      }
    }
    if (Array.isArray(item.children)) {
      return getMenuObj(item.children, obj)
    }
  })
  return obj
}

// 获取第一个菜单name
function getFirstMenuName(menu) {
  let name = menu?.name || 'login'
  if (Array.isArray(menu.children)) {
    name = getFirstMenuName(menu.children[0])
  }
  return name
}

export {
  getMenuObj,
  getFirstMenuName
}