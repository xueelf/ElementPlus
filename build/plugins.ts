import Vue from '@vitejs/plugin-vue';
import VueJsx from '@vitejs/plugin-vue-jsx';
import VueDevTools from 'vite-plugin-vue-devtools';
import UnoCss from 'unocss/vite';
import AutoImport from 'unplugin-auto-import/vite';
import Components from 'unplugin-vue-components/vite';
import VueRouter from 'vue-router/vite';
import { VueRouterAutoImports } from 'vue-router/unplugin';

export function createVitePlugins() {
  return [
    AutoImport({
      dts: './types/auto-imports.d.ts',
      imports: [VueRouterAutoImports, 'vue'],
    }),
    Components({
      dts: './types/components.d.ts',
    }),
    VueRouter({
      dts: './types/typed-router.d.ts',
      routesFolder: {
        src: './src/views',
      },
      exclude: ['**/components/**/*.vue'],
    }),
    Vue(),
    VueJsx(),
    VueDevTools(),
    UnoCss(),
  ];
}
