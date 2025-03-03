/**
 * 深拷贝
 * @param {Object | String | Number | Boolean | Null | Undefined} obj 原始数据
 * @returns {Object | String | Number | Boolean | Null | Undefined} 拷贝后的数据
 */
export default function deepClone(obj, hash = new WeakMap()) {
  if (obj === null || typeof obj !== 'object') {
    return obj;
  }
  if (hash.has(obj)) {
    return hash.get(obj);
  }

  let copy;
  if (obj instanceof Date) {
    copy = new Date(obj);
  } else if (obj instanceof RegExp) {
    copy = new RegExp(obj);
  } else {
    copy = Array.isArray(obj) ? [] : {};
  }
  
  hash.set(obj, copy);
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      copy[key] = deepCopy(obj[key], hash);
    }
  }

  return copy;
}
