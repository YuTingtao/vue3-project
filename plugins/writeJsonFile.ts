/* eslint-disable @typescript-eslint/no-explicit-any */
import { writeFileSync } from 'node:fs';
import type { ResolvedConfig } from 'vite';

interface IOptions {
  name: string;
  json: Record<string, any>;
}

// 生成JSON文件的 Vite 插件
export function writeJsonFile(options: IOptions) {
  const { name, json } = options;
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
        writeFileSync(`${config.publicDir}/${name}.json`, JSON.stringify(json));
      } catch (err) {
        throw new Error('JSON文件写入失败: ' + err);
      }
    }
  };
}
