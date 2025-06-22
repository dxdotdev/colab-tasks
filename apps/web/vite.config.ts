import { defineConfig } from 'vite'
import path from 'node:path'

import { env } from '@repo/lib/env'

import react from '@vitejs/plugin-react-swc'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  server: {
    port: env.WEB_PORT,
  },
})
