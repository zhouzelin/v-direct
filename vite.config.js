const path = require('path')
import { defineConfig } from 'vite'
import { createVuePlugin } from 'vite-plugin-vue2'
import postcssImport from "postcss-import"
import autoprefixer from "autoprefixer"
import tailwindcss from "tailwindcss"

function resolve(_path) {
  return path.resolve(__dirname, _path)
}

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': resolve('src'),
      'comps': resolve('src/components'),
      'styles': resolve('src/styles'),
      'views': resolve('src/views'),
      'dirs': resolve('src/directives'),
      'routers': resolve('src/routers'),
      'utils': resolve('src/utils'),
      'assets': resolve('src/assets')
    }
  },
  css:{
    postcss:{
      plugins:[
        postcssImport,
        autoprefixer,
        tailwindcss
      ]
    }
  },
  plugins: [
    createVuePlugin()
  ],
  build: {
    lib: {
      entry: resolve('src/index.js'),
      name: 'v-direct'
    },
    rollupOptions: {
      external: ['vue'],
      output: {
        globals: {
          vue: 'Vue'
        }
      }
    },
    outDir: 'lib'
  }
})
