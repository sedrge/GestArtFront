import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
  plugins: [vue()],
  server: {
    port: 5173, // Port du frontend Vue.js
    proxy: {
      '/api': {
        target: 'http://localhost:9090', // Port du backend Spring Boot
        changeOrigin: true,
        secure: false,
        rewrite: (path) => path.replace(/^\/api/, '') // Optionnel : ajuste les chemins
      }
    }
  }
});
