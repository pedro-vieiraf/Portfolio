import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/portfolio-project/',
  plugins: [react()],
  css: {
    modules: {
      localsConvention: "camelCase"
    }
  }
})
