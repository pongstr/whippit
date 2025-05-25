/// <reference types="vitest" />
import tailwindcss from "@tailwindcss/vite"
import react from '@vitejs/plugin-react'
import { join, resolve } from 'path'
import { defineConfig } from 'vite'
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
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['./src/tests/setup.ts'],
  },
  worker: {
    format: 'es',
  },
  optimizeDeps: {
    force: true,
  },
  plugins: [
    react(),
    tailwindcss(),
    VitePWA({
      injectRegister: 'inline',
      mode:
        process.env.NODE_ENV === 'production' ? 'production' : 'development',
      devOptions: {
        enabled: false,
        type: 'module',
        navigateFallback: 'index.html',
      },
      registerType: 'prompt',
      manifest: {
        start_url: '/',
        name: 'Whippit! by @pongstr',
        short_name: 'whippit',
        description: 'a React app boilerplate',
        theme_color: '#c6a0f6',
        display: 'standalone',
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
        screenshots: [
          {
            src: '/img/screenshot-desktop.png',
            sizes: '1092x746',
            type: 'image/png',
            form_factor: 'wide',
            label: 'whippit!',
          },
          {
            src: '/img/screenshot-mobile.png',
            sizes: '510x931',
            type: 'image/png',
            form_factor: 'narrow',
            label: 'whippit!',
          },
        ],
      },
      workbox: {
        globPatterns: ['**/*.*'],
        globIgnores: [
          '**/node_modules/**',
          'dev-dist/sw.js',
          'dev-dist/workbox-*.js',
        ],
      },
    }),
  ],
})
