// 数组转对象: key为path
function getMenuObj(tree) {
  const result = {}
  function handle(node) {
    result[node.path] = node
    if (Array.isArray(node.children)) {
      node.children.forEach(item => handle(item))
    }
  }
  tree.forEach(item => handle(item))
  return result
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