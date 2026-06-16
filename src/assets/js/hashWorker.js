// 计算文件hash值的web worker脚本
self.importScripts('/js/spark-md5.min.js');

self.onmessage = function (e) {
  const fileChunks = e.data.fileChunks;
  const spark = new self.SparkMD5.ArrayBuffer();

  for (let i = 0; i < fileChunks.length; i++) {
    const reader = new FileReader();
    reader.readAsArrayBuffer(fileChunks[i]);
    reader.onload = (e) => {
      spark.append(e.target.result);
      if (i === fileChunks.length - 1) {
        self.postMessage({
          hash: spark.end()
        });
        self.close();
      }
    };
  }
};
