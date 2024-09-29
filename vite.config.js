import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';
import sass from 'sass';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), svgr({ include: '**/*.svg' })],
  css: {
    preprocessorOptions: {
      scss: {
        implementation: sass,
      },
    },
  },
  build: {
    target: 'es2022',
  },
});
