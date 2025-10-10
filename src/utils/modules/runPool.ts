/**
 * 控制异步任务的最大并发数
 * @param tasks 任务数组，任务是返回Promise的函数
 * @param max 最大并发数，默认5
 * @returns 所有任务的结果数组
 */
export async function runPool<T = unknown>(tasks: Array<() => Promise<T>>, max = 5) {
  const results: Promise<T>[] = [];
  const executing: Promise<T>[] = [];

  for (const task of tasks) {
    const p = task().then((res) => {
      executing.splice(executing.indexOf(p), 1);
      return res;
    });
    results.push(p);
    executing.push(p);
    if (executing.length >= max) {
      await Promise.race(executing);
    }
  }

  return Promise.all(results);
}
