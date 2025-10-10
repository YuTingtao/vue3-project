<template>
  <div class="large-file-upload">
    <el-upload v-model:file-list="fileList" action="#" :auto-upload="false" :on-change="onChange">
      <template #trigger>
        <el-button type="primary" :disabled="uploading">选择文件</el-button>
      </template>
      <span class="upload-progress" v-show="uploading">上传中{{ uploadProgress }}%...</span>
      <template #tip>
        <div class="el-upload__tip">文件大小不能超过2G</div>
      </template>
    </el-upload>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';
import axios from 'axios';
import type { UploadFile, UploadUserFile } from 'element-plus';
import { runPool } from '@/utils/index.ts';

interface FileChunk {
  file: Blob; // 切片文件
  progressLoaded: number; // 已上传字节数
}

// 文件切片列表
const fileChunks = ref<FileChunk[]>([]);

// 文件列表
const fileList = ref<UploadUserFile[]>([]);

// 文件hash
const hash = ref('');

// 上传进度
const uploadProgress = computed(() => {
  if (!fileList.value[0]?.size) return 0;
  const uploaded = fileChunks.value.reduce((acc, chunk) => acc + chunk.progressLoaded, 0);
  return Math.floor((uploaded / fileList.value[0].size) * 100);
});

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
function getFileHash() {
  return new Promise((resolve) => {
    const worker = new Worker('/js/hash.js');
    const data = {
      fileChunks: fileChunks.value.map((item) => item.file)
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

const uploading = ref(false);

// 上传切片
async function uploadChunks() {
  uploading.value = true;
  hash.value = (await getFileHash()) as string;
  const uploadList = fileChunks.value.map((item, index) => {
    const formData = new FormData();
    formData.append('fileName', fileList.value[0].name);
    formData.append('file', item.file);
    formData.append('hash', `${hash.value}-${index}`);
    return () =>
      axios({
        url: '/api/upload/uploadChunk',
        method: 'POST',
        headers: { 'Content-Type': 'multipart/form-data' },
        data: formData,
        onUploadProgress: (progressEvent) => {
          if (progressEvent?.total) {
            item.progressLoaded = progressEvent.loaded;
          }
        }
      });
  });
  await runPool(uploadList, 5).catch((errs) => {
    ElMessage.error('上传失败');
    uploading.value = false;
    fileList.value = [];
  });
  await mergeChunksRequst().catch((err) => {
    uploading.value = false;
    fileList.value = [];
  });
  uploading.value = false;
}

// 合并切片请求
async function mergeChunksRequst() {
  const res = await axios.post('/api/upload/merge', {
    fileName: fileList.value[0].name,
    hash: hash.value
  });
  if (res.status === 200) {
    fileList.value[0].url = res.data?.url || '';
  }
}

// 监听文件选择
async function onChange(uploadFile: UploadFile) {
  // console.log('文件:', uploadFile);
  fileList.value = [{ name: uploadFile.name, size: uploadFile.size }];
  fileChunks.value = createFileChunk(uploadFile.raw as File);
  await uploadChunks();
}
</script>

<style lang="scss">
.large-file-upload {
  .upload-progress {
    margin-left: 10px;
  }
}
</style>
