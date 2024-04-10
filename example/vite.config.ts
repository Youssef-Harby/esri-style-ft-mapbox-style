import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import { resolve } from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/esri-style-ft-mapbox-style/',
  plugins: [svelte()],
  resolve: {
    alias: {
      '@esri-style-ft-mapbox-style': resolve(__dirname, '..', 'src')
    }
  },
  optimizeDeps: {
    exclude: []
  }
})
