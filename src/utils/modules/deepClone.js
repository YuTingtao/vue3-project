// 深拷贝
export default function deepClone(obj, visited = new Map()) {
  // 处理循环引用
  if (visited.has(obj)) {
    return visited.get(obj);
  }

  // 基础类型和 null
  if (typeof obj !== 'object' || obj === null) {
    return obj;
  }

  // 特殊对象处理
  if (obj instanceof Date) {
    return new Date(obj);
  }
  if (obj instanceof RegExp) {
    return new RegExp(obj);
  }
  if (typeof obj === 'function') {
    const copy = new Function('return ' + obj.toString())();
    visited.set(obj, copy);
    return copy;
  }

  // 数组或对象
  const copy = Array.isArray(obj) ? [] : {};
  visited.set(obj, copy);

  for (let key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      copy[key] = deepClone(obj[key], visited);
    }
  }

  return copy;
}
