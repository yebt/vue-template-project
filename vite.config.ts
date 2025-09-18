import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'
import AutoImport from 'unplugin-auto-import/vite'
import VueRouter from 'unplugin-vue-router/vite'
import { VueRouterAutoImports } from 'unplugin-vue-router'
import Components from 'unplugin-vue-components/vite'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    tailwindcss(),
    AutoImport({
      // targets to transform
      include: [
        /\.[tj]sx?$/, // .ts, .tsx, .js, .jsx
        /\.vue$/,
        /\.vue\?vue/, // .vue
        /\.vue\.[tj]sx?\?vue/, // .vue (vue-loader with experimentalInlineMatchResource enabled)
        /\.md$/, // .md
      ],

      imports: [
        // presets
        'vue',
        VueRouterAutoImports,
        // custom
        // example type import
        // {
        //   from: 'vue-router',
        //   imports: ['RouteLocationRaw'],
        //   type: true,
        // },
      ],

      dirs: [
        './src/composables/**', // all nested modules
        './src/stores/', // root elements
      ],

      dts: true,
      vueTemplate: true,

      viteOptimizeDeps: true,

      eslintrc: {
        enabled: true,
      },
    }),
    VueRouter({
      /* options */
    }),
    Components({
      /* options */
    }),
    vue(),
    vueDevTools(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
})
