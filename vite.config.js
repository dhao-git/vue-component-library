import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { resolve } from 'path';
import { libInjectCss } from 'vite-plugin-lib-inject-css'; // 新增插件

export default defineConfig({
  plugins: [
    vue(),
    libInjectCss() // 自动注入 CSS 到 JS
  ],
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.js'),
      name: 'DhaoVueLibrary',
      fileName: format => `dhao-vue-library.${format}.js`
    },
    rollupOptions: {
      // 确保外部化处理那些你不想打包进库的依赖
      external: ['vue'],
      output: {
        // 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
        globals: {
          vue: 'Vue'
        },
        assetFileNames: 'style.css' // 所有 CSS 合并为一个文件
      }
    },
    cssCodeSplit: false // 禁用 CSS 拆分（确保单文件）
  }
});