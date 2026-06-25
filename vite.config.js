import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// base = '/' для кастомного домена ИЛИ для repo USERNAME.github.io
// base = '/REPO/' для пути USERNAME.github.io/REPO/
// Установлено через переменную окружения VITE_BASE при деплое.
export default defineConfig({
  base: process.env.VITE_BASE || '/',
  plugins: [react()],
})
