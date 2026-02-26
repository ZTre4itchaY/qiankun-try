import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

import qiankun from "vite-plugin-qiankun"

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    qiankun("vite-sub-two", {
      useDevMode: true
    })
  ],
  server: {
    headers: {
      'access-control-allow-headers': "*",
    }
  }
})
