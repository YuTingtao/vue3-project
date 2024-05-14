import { writeFileSync } from 'node:fs'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
// Element Plus按需自动导入
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import vueSetupExtend from 'vite-plugin-vue-setup-extend'
// svg-icon
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'
// gzip压缩
import viteCompression from 'vite-plugin-compression'
// node require语法转化
import requireTransform from 'vite-plugin-require-transform'
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
        target: 'https://www.example.com',
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
    vueSetupExtend(),
    createSvgIconsPlugin({
      iconDirs: [resolve(process.cwd(), 'src/assets/icon')],
      symbolId: 'icon-[dir]-[name]',
      inject: 'body-last',
      customDomId: 'svg__icon__dom'
    }),
    viteCompression({
      threshold: 10240, // 大于10K的文件进行gzip压缩
    }),
    requireTransform({
      fileRegex: /.js$|.vue$/,
    }),
    // 打包分析
    // visualizer({
    //   open: true
    // })
  ],
  build: {
    outDir: 'docs', // 打包输出目录
    chunkSizeWarningLimit: 1000,
    rollupOptions: {
      output: {
        manualChunks: (id) => {
          if(id.includes('node_modules')) {
            return 'vendor'
          }
        },
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
