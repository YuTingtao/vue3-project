/* eslint-disable no-control-regex */
import { writeFileSync } from 'node:fs';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { resolve } from 'node:path';

// Element Plus按需自动导入
import AutoImport from 'unplugin-auto-import/vite';
import Components from 'unplugin-vue-components/vite';
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers';

import VueSetupExtend from 'vite-plugin-vue-setup-extend';
import { compression } from 'vite-plugin-compression2';
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons';
// 打包分析
// import { visualizer } from 'rollup-plugin-visualizer';

// 生成版本JSON文件
if (process.env.NODE_ENV === 'production') {
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

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    AutoImport({ resolvers: [ElementPlusResolver({ importStyle: 'sass' })] }),
    Components({ resolvers: [ElementPlusResolver({ importStyle: 'sass' })] }),
    VueSetupExtend(),
    createSvgIconsPlugin({
      iconDirs: [resolve(process.cwd(), 'src/assets/icon')],
      symbolId: 'icon-[dir]-[name]',
      inject: 'body-last',
      customDomId: 'svg__icon__dom'
    }),
    // 大于50K的文件进行gzip压缩
    compression({ threshold: 1024 * 50 }),
    // 打包分析
    // visualizer({ open: true, filename: 'docs/stats.html' })
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
    chunkSizeWarningLimit: 1024 * 500,
    rollupOptions: {
      output: {
        chunkFileNames: 'assets/js/[name]-[hash].js', // 引入文件名的名称
        entryFileNames: 'assets/js/[name]-[hash].js', // 包的入口文件名称
        assetFileNames: 'assets/[ext]/[name]-[hash].[ext]', // 资源文件像：字体、图片等
        manualChunks(id) {
          if (id.includes('node_modules/element-plus')) {
            return 'element-plus';
          } else if (id.includes('node_modules')) {
            return 'vendor';
          }
        },
        // 解决github: _plugin-vue_export-helper.js报404
        sanitizeFileName(name) {
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
    host: '0.0.0.0',
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
