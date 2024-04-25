// 数组转对象: key为path
function getMenuObj(menus) {
  const obj = {}
  menus.forEach(item => {
    if (item.path) {
      obj[item.path] = item
    }
    if (Array.isArray(item.children)) {
      const children = getMenuObj(item.children)
      Object.keys(children).forEach(key => {
        obj[key] = children[key]
      })
    }
  })
  return obj
}

// 获取第一个菜单
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