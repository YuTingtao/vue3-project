/* eslint-disable semi */
/* eslint-disable no-prototype-builtins */
// 深拷贝
function deepClone(obj) {
  if (typeof obj !== 'object' || obj == null) {
    return obj;
  }
  let clone = Array.isArray(obj) ? [] : {};
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      clone[key] = deepClone(obj[key]);
    }
  }
  return clone;
}

export default deepClone
