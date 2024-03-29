import { writeFileSync } from 'node:fs'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
// Element Plus按需自动导入
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
// svg-icon
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'
// gzip压缩
import viteCompression from 'vite-plugin-compression'
// 图片压缩
import viteImagemin from 'vite-plugin-imagemin'
// 打包分析
import { visualizer } from 'rollup-plugin-visualizer'

// 生成版本JSON文件
try {
  writeFileSync(resolve(__dirname, 'public/version.json'), JSON.stringify({
    version: 'v_' +  Date.now()
  }))
  console.log('JSON文件写入成功')
} catch (err) {
  console.log('JSON文件写入失败:', err)
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
    createSvgIconsPlugin({
      iconDirs: [resolve(process.cwd(), 'src/assets/icon')],
      symbolId: 'icon-[dir]-[name]',
      inject: 'body-last',
      customDomId: 'svg__icon__dom'
    }),
    viteCompression({
      threshold: 10240, // 大于10K的文件进行gzip压缩
    }),
    // 图片压缩
    viteImagemin({
      mozjpeg: {
        quality: 80
      },
      optipng: {
        optimizationLevel: 7
      },
      pngquant: {
        quality: [0.65, 0.90],
        speed: 4
      },
      webp: {
        quality: 75
      },
      gifsicle: {
        optimizationLevel: 7,
        interlaced: false
      }
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
