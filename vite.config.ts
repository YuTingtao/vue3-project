/* eslint-disable no-control-regex */
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { resolve } from 'node:path';
import svgLoader from 'vite-svg-loader';

// 按需自动导入
import AutoImport from 'unplugin-auto-import/vite';
import Components from 'unplugin-vue-components/vite';
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers';
import Icons from 'unplugin-icons/vite';
import IconsResolver from 'unplugin-icons/resolver';

// 打包压缩、分析
import { compression } from 'vite-plugin-compression2';
// import { visualizer } from 'rollup-plugin-visualizer';
import { writeFile } from './plugins/writeFile.ts';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    svgLoader({
      svgoConfig: {
        multipass: true,
        plugins: [{ name: 'convertColors', params: { currentColor: true } }]
      }
    }),
    AutoImport({
      resolvers: [ElementPlusResolver({ importStyle: 'sass' }), IconsResolver()]
    }),
    Components({
      resolvers: [
        ElementPlusResolver({ importStyle: 'sass' }),
        IconsResolver({ prefix: '', enabledCollections: ['ep'] })
      ]
    }),
    Icons({
      compiler: 'vue3',
      autoInstall: true
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
              priority: 100
            },
            {
              name: 'vendor-element',
              test: /node_modules[\\/]element-plus/,
              priority: 90
            },
            {
              name: 'vendor-echarts',
              test: /node_modules[\\/]echarts/,
              priority: 80
            },
            {
              name: 'vendor-common',
              test: /node_modules[\\/]/,
              priority: 10
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
