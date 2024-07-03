import { resolve } from 'path';
import { defineConfig } from 'vite';
import autoprefixer from 'autoprefixer';

export default defineConfig({
  root: resolve(__dirname, 'src'),
  publicDir: resolve(__dirname, 'public'),
  build: {
    outDir: resolve(__dirname, 'dist'),
    emptyOutDir: false,
  },
  css: {
    postcss: {
      plugins: [autoprefixer],
    },
  },
});
