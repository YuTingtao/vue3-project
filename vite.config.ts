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
    // 大于50K的文件进行gzip压缩
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
    outDir: 'docs', // 打包输出目录
    target: ['chrome87', 'edge88', 'firefox78', 'safari14'],
    rollupOptions: {
      output: {
        chunkFileNames: 'assets/js/[name]-[hash].js', // 引入文件名的名称
        entryFileNames: 'assets/js/[name]-[hash].js', // 包的入口文件名称
        assetFileNames: 'assets/[ext]/[name]-[hash].[ext]', // 资源文件像：字体、图片等
        manualChunks(id: string) {
          if (id.includes('node_modules')) {
            const dirName = __dirname.replace(/\\/g, '/');
            id = id.replace(dirName, '');
            if (id.includes('@vueup/vue-quill') || id.includes('quill')) {
              return 'vendor-quill';
            } else if (id.includes('element-plus')) {
              return 'vendor-element';
            }
            return 'vendor';
          }
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
        target: 'http:xxx.com',
        changeOrigin: true
        // rewrite: (path) => path.replace(/^\/api/, '')
      }
    }
  }
});
