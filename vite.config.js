import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/despliegue-1/', // 👈 importante: debe tener slash inicial y final
})
