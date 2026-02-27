import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

import qiankun from "vite-plugin-qiankun"
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  base: process.env.NODE_ENV === 'development' ? "./" : "/qiankun/sub-one/",
  plugins: [
    vue(),
    qiankun('vite-sub-one', {
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
      'Access-Control-Allow-Origin': '*'
    }
  }
})

console.log(process.env.NODE_ENV)
