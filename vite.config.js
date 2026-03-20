import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/aadu/', // Base URL for the hypetf/aadu repository
  plugins: [
    tailwindcss(),
    react()
  ],
})
