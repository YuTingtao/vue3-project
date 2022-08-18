import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { resolve } from 'path';
// Element Plus按需自动导入
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
// svg-icon
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'

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
                additionalData: `@use '@/assets/scss/base/element.scss' as *;`,
            },
        },
    },
    plugins: [
        vue(),
        AutoImport({
            resolvers: [
                ElementPlusResolver({
                    importStyle: 'sass',
                })
            ],
        }),
        Components({
            resolvers: [
                ElementPlusResolver({
                    importStyle: 'sass',
                })
            ],
        }),
        createSvgIconsPlugin({
            iconDirs: [resolve(process.cwd(), 'src/assets/icon')],
            symbolId: 'icon-[dir]-[name]',
            inject: 'body-last',
            customDomId: 'svg__icon__dom',
        }),
    ],
    base: './', // 公共基础路径
    server: {
        host: '0.0.0.0',
        port: 8080,
        open: true,
        cors: true,
        proxy: {
            '/api': 'http://xxx.com'
        }
    },
    build: {
        outDir: 'docs', // 打包输出目录
        chunkSizeWarningLimit: 1000,
    },
});
