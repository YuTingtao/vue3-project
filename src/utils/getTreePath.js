// 方法1
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

// 方法2
// function getTreePath(tree, value, props = { key: 'id', child: 'child' }) {
//     let tempPath = [];
//     function getNodePath(arr) {
//         for (let i = 0; i < arr.length; i++) {
//             let node = arr[i];
//             tempPath.push(node);
//             // 找到符合条件的节点
//             if (node[props.key] == value) {
//                 throw 'Got it success!'; // 通过报错结束
//             }
//             // 未找到递归child
//             if (node[props.child] && node[props.child].length > 0) {
//                 getNodePath(node[props.child]);
//             }
//             // 没有找到删除节点
//             tempPath.pop();
//         }
//     }
//     try {
//         getNodePath(tree);
//     } catch (error) {
//         return tempPath;
//     }
// }

export default getTreePath;
