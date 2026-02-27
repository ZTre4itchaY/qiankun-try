import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
import qiankun from "vite-plugin-qiankun"

// https://vite.dev/config/
export default defineConfig({
  base: process.env.NODE_ENV === 'development' ? "./" : "/qiankun/sub-two/",
  plugins: [
    vue(),
    qiankun("vite-sub-two", {
      useDevMode: true
    })
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src")
    }
  },
  server: {
    headers: {
      'access-control-allow-headers': "*",
    }
  }
})
