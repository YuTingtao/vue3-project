/* eslint-disable new-cap */
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
// Element Plus按需自动导入
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
// svg-icon
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'
import viteCompression from 'vite-plugin-compression'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src')
    }
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@use '@/assets/style/base/element.scss' as *;`
      }
    }
  },
  base: './', // 公共基础路径
  envDir: './env', // 多环境env文件目录
  plugins: [
    vue(),
    AutoImport({
      resolvers: [
        ElementPlusResolver({
          importStyle: 'sass'
        })
      ],
      // 解决eslint报错
      eslintrc: {
        enabled: true,
        filepath: './.eslintrc-auto-import.json',
        globalsPropValue: true
      }
    }),
    Components({
      resolvers: [
        ElementPlusResolver({
          importStyle: 'sass'
        })
      ]
    }),
    createSvgIconsPlugin({
      iconDirs: [resolve(process.cwd(), 'src/assets/icon')],
      symbolId: 'icon-[dir]-[name]',
      inject: 'body-last',
      customDomId: 'svg__icon__dom'
    }),
    viteCompression({
      threshold: 51200, // 大于50K的文件进行gzip压缩
    }),
  ],
  server: {
    host: '0.0.0.0',
    port: 8083,
    open: true,
    cors: true,
    proxy: {
      '/api': 'http://xxx.com'
    }
  },
  build: {
    outDir: 'docs', // 打包输出目录
    chunkSizeWarningLimit: 1536,
    rollupOptions: {
      output: {
        manualChunks: {
          vendors: ['vue', 'vue-router', 'pinia', 'axios'],
        }
      }
    }
  }
})
