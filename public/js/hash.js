/**
 * 计算文件hash值
 */

self.importScripts('./spark-md5.min.js');

self.onmessage = function (e) {
  var fileChunks = e.data.fileChunks;
  var spark = new self.SparkMD5.ArrayBuffer();
  var count = 0;

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
