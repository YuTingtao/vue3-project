/* eslint-disable no-control-regex */
import { writeFileSync } from 'node:fs'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'node:path'

// Element Plus按需自动导入
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

import VueSetupExtend from 'vite-plugin-vue-setup-extend'
import ViteCompression from 'vite-plugin-compression'
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'
// 打包分析
import { visualizer } from 'rollup-plugin-visualizer'

// 生成版本JSON文件
if (process.env.NODE_ENV !== 'development') {
  try {
    writeFileSync(resolve(__dirname, 'public/version.json'), JSON.stringify({
      version: 'v_' +  Date.now()
    }))
    console.log('JSON文件写入成功')
  } catch (err) {
    console.log('JSON文件写入失败:', err)
  }
}

// https://vitejs.dev/config/
export default defineConfig({
  base: './', // 公共基础路径
  server: {
    host: '0.0.0.0',
    port: 8080,
    open: true,
    proxy: {
      '/api': {
        target: 'http:xxx.com',
        changeOrigin: true,
        // rewrite: (path) => path.replace(/^\/api/, '')
      }
    }
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src')
    }
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@use '@/assets/style/element.scss' as *;`
      }
    }
  },
  plugins: [
    vue(),
    AutoImport({
      resolvers: [
        ElementPlusResolver({
          importStyle: 'sass'
        })
      ],
    }),
    Components({
      resolvers: [
        ElementPlusResolver({
          importStyle: 'sass'
        })
      ]
    }),
    VueSetupExtend(),
    createSvgIconsPlugin({
      iconDirs: [resolve(process.cwd(), 'src/assets/icon')],
      symbolId: 'icon-[dir]-[name]',
      inject: 'body-last',
      customDomId: 'svg__icon__dom'
    }),
    ViteCompression({
      threshold: 10240, // 大于10K的文件进行gzip压缩
    }),
    // 打包分析
    // visualizer({
    //   open: true
    // })
  ],
  build: {
    outDir: 'docs', // 打包输出目录
    chunkSizeWarningLimit: 1024 * 500,
    rollupOptions: {
      output: {
        chunkFileNames: 'assets/js/[name]-[hash].js', // 引入文件名的名称
        entryFileNames: 'assets/js/[name]-[hash].js', // 包的入口文件名称
        assetFileNames: 'assets/[ext]/[name]-[hash].[ext]', // 资源文件像：字体、图片等
        // manualChunks: (id) => {
        //   if(id.includes('node_modules')) {
        //     // return id.toString().split('node_modules/')[1].split('/')[0].toString()
        //     return 'vender'
        //   }
        // },
        // 解决github: _plugin-vue_export-helper.js报404
        sanitizeFileName(name) {
          const match = /^[a-z]:/i.exec(name)
          const driveLetter = match ? match[0] : ''
          const reg = /[\u0000-\u001F"#$&*+,:;<=>?[\]^`{|}\u007F]/g
          return (
            driveLetter + name.slice(driveLetter.length).replace(reg, '_').replace(/^_/, '')
          )
        }
      }
    }
  }
})
