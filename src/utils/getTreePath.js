// 根据id获取树路径
function getTreePath(tree, value, props = { key: 'id', children: 'children' }, path = []) {
  let tempPath = path;
  for (let i = 0; i < tree.length; i++) {
    let node = tree[i];
    tempPath.push(node);
    // 找到符合条件的节点
    if (node[props.key] == value) {
      return tempPath;
    }
    // 未找到递归child
    if (node[props.children] && node[props.children].length > 0) {
      let result = getTreePath(node[props.children], value, props, tempPath);
      if (result) {
        return result;
      }
    }
    // 没有找到删除节点
    tempPath.pop();
  }
}

export default getTreePath;
