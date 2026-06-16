/* eslint-disable no-control-regex */
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { resolve } from 'node:path';

// Element Plus按需自动导入
import AutoImport from 'unplugin-auto-import/vite';
import Components from 'unplugin-vue-components/vite';
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers';

import { compression } from 'vite-plugin-compression2';
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons';
// import { visualizer } from 'rollup-plugin-visualizer';
import { writeFile } from './plugins/writeFile.ts';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    AutoImport({ resolvers: [ElementPlusResolver({ importStyle: 'sass' })] }),
    Components({ resolvers: [ElementPlusResolver({ importStyle: 'sass' })] }),
    createSvgIconsPlugin({
      iconDirs: [resolve(process.cwd(), 'src/assets/icon')],
      symbolId: 'icon-[dir]-[name]',
      inject: 'body-last',
      customDomId: '__svg_icon_dom__'
    }),
    // 大于50K的文件进行压缩
    compression({ threshold: 1024 * 50 }),
    // 打包分析
    // visualizer({ open: true, filename: 'docs/stats.html' }),
    writeFile({ name: 'version.json', data: { version: Date.now() } })
  ],
  resolve: { alias: { '@': resolve(__dirname, 'src') } },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@use '@/assets/style/element.scss' as *;`
      }
    }
  },
  // 公共基础路径
  base: './',
  // 打包配置
  build: {
    outDir: 'dist', // 打包输出目录
    target: 'es2015', // 兼容目标
    rolldownOptions: {
      output: {
        chunkFileNames: 'assets/js/[name]-[hash].js', // 引入文件名的名称
        entryFileNames: 'assets/js/[name]-[hash].js', // 包的入口文件名称
        assetFileNames: 'assets/[ext]/[name]-[hash].[ext]', // 图片字体等资源文件
        codeSplitting: {
          maxSize: 1024 * 1024 * 500, // 超过500M的文件进行分割
          groups: [
            {
              name: 'vendor-vue',
              test: /node_modules[\\/](vue|vue-router|pinia|axios)/,
              priority: 50
            },
            {
              name: 'vendor-element',
              test: /node_modules[\\/]element-plus/,
              priority: 40
            },
            {
              name: 'vendor-echarts',
              test: /node_modules[\\/]echarts/,
              priority: 30
            },
            {
              name: 'vendor-common',
              test: /node_modules[\\/]/,
              priority: 5
            }
          ]
        },
        // 解决github: _plugin-vue_export-helper.js报404
        sanitizeFileName(name: string): string {
          const match = /^[a-z]:/i.exec(name);
          const driveLetter = match ? match[0] : '';
          const reg = /[\u0000-\u001F"#$&*+,:;<=>?[\]^`{|}\u007F]/g;
          return driveLetter + name.slice(driveLetter.length).replace(reg, '_').replace(/^_/, '');
        }
      }
    }
  },
  // 开发服务配置
  server: {
    host: true,
    port: 8080,
    open: true,
    proxy: {
      '/api': {
        target: 'http:www.xxx.com',
        changeOrigin: true
        // rewrite: (path) => path.replace(/^\/api/, '')
      }
    }
  }
});
