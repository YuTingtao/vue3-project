// 数组转对象: key为name
function getMenuObj(tree) {
  const result = {};
  function handle(node) {
    result[node.name] = node;
    if (Array.isArray(node.children)) {
      node.children.forEach(item => handle(item));
    }
  }
  tree.forEach(item => handle(item));
  return result;
}

// 获取第一个菜单
function getFirstMenu(menu) {
  let result;
  function handle(node) {
    if (node.children && node.children.length > 0) {
      handle(node.children[0]);
    } else {
      result = node.path;
    }
  }
  handle(menu);
  return result || '/login';
}

export {
  getMenuObj,
  getFirstMenu,
};