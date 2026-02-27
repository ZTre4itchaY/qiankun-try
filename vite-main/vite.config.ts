import { defineConfig } from 'vite'
import path from "path"
import vue from '@vitejs/plugin-vue'

// https://vite.dev/config/
export default defineConfig({
  base: process.env.NODE_ENV === 'development' ? "./" : "/qiankun",
  plugins: [vue()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  }
})
