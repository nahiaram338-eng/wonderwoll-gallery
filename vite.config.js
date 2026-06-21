import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/wonderwoll-gallery/',
  plugins: [react()],
})
