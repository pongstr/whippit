/// <reference types="vitest" />
/// <reference types="vite/client" />

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve, join } from 'path'
import { VitePWA } from 'vite-plugin-pwa'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': resolve(join(process.cwd(), 'src')),
      pages: resolve(join(process.cwd(), 'src/pages')),
      components: resolve(join(process.cwd(), 'src/components')),
    },
  },
  plugins: [
    react(),
    VitePWA({
      injectRegister: 'inline',
      devOptions: { enabled: true },
      registerType: 'autoUpdate',
      manifest: {
        name: 'Whippit! by @pongstr',
        short_name: 'whippit',
        description: 'a React app boilerplate',
        theme_color: '#c6a0f6',
        icons: [
          {
            src: '/img/pwa-64x64.png',
            sizes: '64x64',
            type: 'image/png',
          },
          {
            src: '/img/pwa-192x192.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: '/img/pwa-512x512.png',
            sizes: '512x512',
            type: 'image/png',
          },
          {
            src: '/img/maskable-icon.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'maskable',
          },
        ],
      },
      workbox: {
        globPatterns: ['**/*.{js,css,html,ico,png,svg}'],
      },
    }),
  ],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['./src/tests/setup.ts'],
  },
})
