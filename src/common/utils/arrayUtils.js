/* eslint-disable semi */

/**
 * 数组转树
 * @param {array} arr 数组
 * @returns 
 */
export function arrayToTree(arr) {
  const map = {};
  const result = [];

  // 将数组中的每个对象放入map中，键为id
  arr.forEach(item => {
    map[item.id] = { ...item, children: [] };
  });

  // 遍历数组，将每个对象添加到其父对象的children数组中
  arr.forEach(item => {
    if (!item.parentId) {
      result.push(map[item.id]);
    } else {
      if (map[item.parentId]) {
        map[item.parentId].children.push(map[item.id]);
      }
    }
  });

  return result;
}

/**
 * 树转数组
 * @param {array} tree 树
 * @returns 
 */
export function treeToArray(tree) {
  const result = [];

  function traverse(node) {
    if (!node) return;
    result.push(node);
    if (node.children && node.children.length > 0) {
      node.children.forEach(child => traverse(child));
    }
  }

  tree.forEach(rootNode => traverse(rootNode));

  return result;
}
