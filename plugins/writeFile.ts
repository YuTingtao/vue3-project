/* eslint-disable @typescript-eslint/no-explicit-any */
import { writeFileSync } from 'node:fs';
import type { ResolvedConfig } from 'vite';

interface IOptions {
  name: string;
  data: any;
}

// 生成Text文件的 Vite 插件
export function writeFile(options: IOptions) {
  const { name, data } = options;
  let config = {} as ResolvedConfig;
  return {
    name: 'vite:write-json',
    configResolved(resolvedConfig: ResolvedConfig) {
      config = resolvedConfig;
      // console.log('config:', config);
    },
    buildStart() {
      if (config.command !== 'build') {
        return;
      }
      try {
        let textData = data;
        if (typeof data === 'object') {
          textData = JSON.stringify(data);
        }
        writeFileSync(`${config.publicDir}/${name}`, textData);
      } catch (err) {
        throw new Error('JSON文件写入失败: ' + err);
      }
    }
  };
}
