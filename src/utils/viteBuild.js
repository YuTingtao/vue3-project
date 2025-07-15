import { writeFileSync } from 'node:fs';

// 写入版本信息JSON文件
export function writeVersonFile() {
  try {
    writeFileSync(
      resolve(__dirname, 'public/version.json'),
        JSON.stringify({
        version: 'v_' + Date.now()
      })
    );
    console.log('JSON文件写入成功');
  } catch (err) {
    console.log('JSON文件写入失败:', err);
  }
}
