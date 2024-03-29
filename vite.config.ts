import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import svgr from 'vite-plugin-svgr';
import tsconfigPaths from 'vite-tsconfig-paths';

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    assetsDir: 'static',
    sourcemap: false,
    rollupOptions: {
      output: {
        manualChunks: id => {
          if (id.includes('@mui/base')) {
            return `@mui/base`;
          } else if (id.includes('@mui/material')) {
            return `@mui/material`;
          } else if (id.includes('@mui/icons-material')) {
            return `@mui/icons-material`;
          }
        },
      },
    },
  },
  plugins: [
    react({
      babel: {
        plugins: ['@emotion/babel-plugin'],
      },
    }),
    svgr({ include: '**/*.svg?react' }),
    tsconfigPaths(),
  ],
  server: {
    port: 3000,
  },
});
