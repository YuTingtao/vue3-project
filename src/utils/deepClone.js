// 深拷贝
function deepClone(obj) {
    if (typeof obj !== 'object' || obj == null) return obj
    let res = Array.isArray(obj) ? [] : {}
    for (let key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
            if (typeof obj[key] === 'object' && obj[key] != null) {
                res[key] = deepClone(obj[key])
            } else {
                res[key] = obj[key]
            }
        }
    }
    return res
}

export default deepClone
