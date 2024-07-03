import { resolve } from 'path';
import { defineConfig } from 'vite';
import autoprefixer from 'autoprefixer';

import handlebars from './vite-handlebars-precompile';

export default defineConfig({
  root: resolve(__dirname, 'src'),
  publicDir: resolve(__dirname, 'public'),
  build: {
    outDir: resolve(__dirname, 'dist'),
    emptyOutDir: false,
  },
  server: {
    port: 3000,
  },
  plugins: [handlebars()],
  css: {
    postcss: {
      plugins: [autoprefixer],
    },
  },
});
