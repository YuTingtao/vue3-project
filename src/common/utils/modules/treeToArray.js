/**
 * 树转数组
 * @param {Array} tree 树
 * @returns {Array}
 */
export function treeToArray(tree) {
  var result = []

  function traverse(node) {
    if (!node) return
    result.push(node)
    if (node.children && node.children.length > 0) {
      node.children.forEach(child => traverse(child))
    }
  }

  tree.forEach(rootNode => traverse(rootNode))

  return result
}
