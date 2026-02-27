import { fileURLToPath, URL } from 'node:url';
import { defineConfig, loadEnv } from 'vite';
import { createVitePlugins } from './build/plugins';

function pathResolve(dir: string) {
  return fileURLToPath(new URL(dir, import.meta.url));
}

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const root = process.cwd();
  const env = loadEnv(mode, root);
  const { VITE_PORT, VITE_BASE_URL, VITE_API_PATH } = env;

  return {
    plugins: createVitePlugins(),
    resolve: {
      alias: {
        '@': pathResolve('./src'),
      },
    },
    server: {
      host: true,
      port: Number(VITE_PORT),
      proxy: {
        [VITE_API_PATH]: {
          target: VITE_BASE_URL,
          changeOrigin: true,
          rewrite: (path) => path.replace(VITE_API_PATH, ''),
        },
      },
    },
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `@use '@/styles/element/index.scss';`,
        },
      },
    },
  };
});
