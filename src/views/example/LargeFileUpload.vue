<template>
  <div class="large-file-upload">
    <el-upload v-model:file-list="fileList" action="#" :multiple="true" :http-request="httpRequest">
      <template #trigger>
        <el-button type="primary">选择文件</el-button>
      </template>
      <template #tip>
        <div class="el-upload__tip">文件大小不能超过2G</div>
      </template>
    </el-upload>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue';
import axios from 'axios';
import type { UploadProgressEvent, UploadRequestOptions, UploadUserFile } from 'element-plus';
import pLimit from 'p-limit';

interface FileChunk {
  [key: number]: {
    chunks: {
      file: Blob; // 切片文件
      progressLoaded: number; // 已上传字节数
    }[];
    hash: string; // 切片hash
  };
}

// 文件列表
const fileList = ref<UploadUserFile[]>([]);

// 文件列表切片对象
const fileChunk: FileChunk = reactive({});

// 并发控制
const limit = pLimit(5);

/**
 * 创建文件切片
 * @param {File} file 文件
 * @param {number} size 切片大小，默认10MB
 */
function createFileChunk(file: File, size = 1024 * 1024 * 10) {
  const fileChunks = [];
  let current = 0;
  while (current < file.size) {
    fileChunks.push({
      file: file.slice(current, current + size),
      progressLoaded: 0
    });
    current = current + size;
  }
  return fileChunks;
}

// 获取文件hash
function getFileHash(key: number) {
  return new Promise((resolve) => {
    const worker = new Worker('/js/hash.js');
    const data = {
      fileChunks: fileChunk[key].chunks.map((item) => item.file)
    };
    worker.postMessage(data);
    worker.onmessage = (e) => {
      const { hash } = e.data;
      if (hash) {
        resolve(hash);
        worker.terminate();
      }
    };
  });
}

// 上传进度
function getUploadProgress(uid: number) {
  const index = fileList.value.findIndex((item) => item.uid === uid);
  const uploaded = fileChunk[uid].chunks.reduce((acc, chunk) => acc + chunk.progressLoaded, 0);
  if (!fileList.value[index]?.size) return 100;
  const size = fileList.value[index].size;
  const percent = (uploaded / size) * 100;
  return percent > 100 ? 100 : percent;
}

// 合并切片请求
async function mergeChunksRequst(uid: number) {
  const res = await axios.post('/api/upload/merge', {
    fileName: fileList.value[0].name,
    hash: fileChunk[uid].hash
  });
  if (res.status === 200) {
    fileList.value[0].url = res.data?.url || '';
  }
}

// 上传切片
async function uploadChunks(options: UploadRequestOptions) {
  const uid = options.file.uid;
  const hash = fileChunk[uid].hash;
  const uploadChunks = fileChunk[uid].chunks.map((item, index) => {
    const formData = new FormData();
    formData.append('fileName', fileList.value[0].name);
    formData.append('file', item.file);
    formData.append('hash', `${hash}-${index}`);
    return limit(() =>
      axios({
        url: '/api/upload/uploadChunk',
        method: 'POST',
        headers: { 'Content-Type': 'multipart/form-data' },
        data: formData,
        onUploadProgress: (e) => {
          if (e?.total) {
            item.progressLoaded = e.loaded;
          }
          const evt = {
            ...e,
            percent: getUploadProgress(uid)
          };
          options.onProgress(evt as unknown as UploadProgressEvent);
        }
      })
    );
  });
  const resArr = await Promise.all(uploadChunks).catch((errs) => {
    options.onError(errs);
    delete fileChunk[uid];
    ElMessage.error('上传失败');
  });
  if (resArr) {
    await mergeChunksRequst(uid)
      .then((res) => {
        options.onSuccess(res);
      })
      .catch((err) => {
        options.onError(err);
        delete fileChunk[uid];
        ElMessage.error('上传失败');
      });
  }
}

async function httpRequest(options: UploadRequestOptions) {
  // console.log('options', options);
  const { file } = options;
  fileChunk[file.uid] = {
    chunks: [],
    hash: ''
  };
  fileChunk[file.uid].chunks = createFileChunk(file);
  fileChunk[file.uid].hash = (await getFileHash(file.uid)) as string;
  uploadChunks(options);
}
</script>

<style lang="scss">
.large-file-upload {
  .el-upload-list__item {
    margin-bottom: 0;
  }
  .el-upload-list__item .el-progress__text {
    margin-bottom: 0;
  }
  .el-upload-list--text {
    line-height: 30px;
  }
  .el-upload-list__item .el-upload-list__item-info {
    margin-left: 0;
  }
  .el-upload-list__item .el-progress {
    top: 30px;
    margin-top: 0 !important;
  }
  .el-upload-list__item .el-progress__text {
    top: -19px;
  }
}
</style>
