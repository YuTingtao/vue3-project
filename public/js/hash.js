/**
 * 计算文件hash值
 */

self.importScripts('/js/spark-md5.min.js');

self.onmessage = function (e) {
  const { fileChunks } = e.data;
  const spark = new self.SparkMD5.ArrayBuffer();
  let count = 0;

  function loadNext(index) {
    const reader = new FileReader();
    reader.readAsArrayBuffer(fileChunks[index]);
    reader.onload = e => {
      spark.append(e.target.result);
      count++;
      if (count === fileChunks.length) {
        self.postMessage({
          hash: spark.end()
        });
        self.close();
      } else {
        loadNext(count);
      }
    };
  }

  loadNext(0);
};
