// 深拷贝
function deepClone(obj) {
    if (typeof obj !== 'object' || obj == null) return obj;
    var result = Array.isArray(obj) ? [] : {};
    for (var key in obj) {
      if (obj.hasOwnProperty(i)) {
        if (typeof obj[key] === 'object' && obj[key] != null) {
          result[key] = cloneDeep(obj[key]);
        } else {
          result[key] = obj[key];
        }
      }
    }
    return result;
}

export default deepClone;
