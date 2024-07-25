/* eslint-disable semi */

/**
 * 数组：树形结构转平铺
 * @param {*} tree 树形结构数组
 * @param {*} props { children: 'children' } 自定义children字段
 * @returns Array
 */
function treeToList(tree, props = { children: 'children' }) {
  let result = [];
  let children = props.children
  // 处理函数
  function handle(node) {
    result.push(node);
    if (node[children] && node[children].length) {
      // 递归处理子节点
      node[children].forEach(item => handle(item));
    }
  }
  // 处理根节点
  tree.forEach(item => handle(item));
  return result;
}

/**
 * 数组：平铺转树形结构
 * @param {*} list 扁平数组
 * @returns Array
 */
function listToTree(list) {
  const idMap = list.reduce((res, item, index) => {
    res[item.id] = index;
    return res;
  }, {});

  let result = [];
  list.forEach(item => {
    // 添加根元素
    if (item.parentId === undefined || !list.some(item2 => item2.id === item.parentId)) {
      result.push(item);
      return;
    }
    // 如果parentId存在，在其父元素的children中添加当前元素
    const parent = list[idMap[item.parentId]];
    parent.children = [...(parent.children || []), item];
  });
  return result;
}

export {
  treeToList,
  listToTree,
}