import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
  plugins: [ vue() ],
  server: {
    open: false,
    port: 5173,
  }
});