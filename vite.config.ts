import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { resolve } from 'path';
import UnoCSS from 'unocss/vite';
import AutoImport from 'unplugin-auto-import/vite';
import Components from 'unplugin-vue-components/vite';

export default defineConfig({
  resolve: { alias: { '@': resolve(__dirname, 'src') } },
  plugins: [
    vue(),
    UnoCSS(),
    AutoImport({
      imports: ['vue', 'vue-router', 'pinia'],
      dirs: [],
      vueTemplate: true,
    }),
    Components(),
  ],
  server: { port: 80, proxy: { '/fancy': 'http://localhost:8080' } },
});
