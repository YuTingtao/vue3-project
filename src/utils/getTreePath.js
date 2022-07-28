// 根据id获取树路径
function getTreePath(tree, value, props = { key: 'id', child: 'child' }, path = []) {
    let tempPath = path;
    for (let i = 0; i < tree.length; i++) {
        let node = tree[i];
        tempPath.push(node);
        // 找到符合条件的节点
        if (node[props.key] == value) {
            return tempPath;
        }
        // 未找到递归child
        if (node[props.child] && node[props.child].length > 0) {
            let result = getTreePath(node[props.child], value, props, tempPath);
            if (result) {
                return result;
            }
        }
        // 没有找到删除节点
        tempPath.pop();
    }
}

export default getTreePath;
