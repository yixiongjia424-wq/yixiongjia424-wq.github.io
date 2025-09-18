// vite.config.ts
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
// ⬇️ 用命名导出
import { viteSingleFile } from 'vite-plugin-singlefile'

export default defineConfig({
  plugins: [react(), viteSingleFile()],
  base: './', // 让 file:// 离线打开更稳
})
