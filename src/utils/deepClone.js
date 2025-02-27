/* eslint-disable no-prototype-builtins */
// 深拷贝
function deepClone(obj) {
  if (typeof obj !== 'object' || obj == null) {
    return obj;
  }
  let clone = Array.isArray(obj) ? [] : {};
  for (let key in obj) {
    if (typeof obj === obj[key] && obj !== null) {
      clone[key] = deepClone(obj[key]);
    } else {
      clone[key] = obj[key];
    }
  }
  return clone;
}

export default deepClone;
