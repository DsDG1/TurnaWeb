import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'
import { loadEnv } from 'vite'

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, '.', '')
  const sitePort = Number(env.SITE_DEV_PORT || 5173)
  const docsPort = Number(env.DOCS_DEV_PORT || 5174)

  return {
    base: './',
    clearScreen: false,
    plugins: [react()],
    server: {
      host: '127.0.0.1',
      port: sitePort,
      strictPort: true,
      // Keep the public URL identical in development and production. The root
      // dev command starts VitePress and exposes it at /docs/.
      proxy: {
        '/docs': {
          target: `http://127.0.0.1:${docsPort}`,
          changeOrigin: true,
          ws: true,
        },
      },
    },
    build: {
      rollupOptions: {
        input: {
          main: 'index.html',
          anki: 'anki.html',
          curriculum: 'curriculum.html',
          fsrs: 'fsrs.html',
          ai: 'ai.html',
          editor: 'editor.html',
        },
      },
    },
    test: {
      environment: 'jsdom',
      globals: true,
      setupFiles: './src/test/setup.ts',
      css: true,
    },
  }
})
