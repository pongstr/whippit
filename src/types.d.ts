declare module 'virtual:pwa-register/react' {
  import type { Dispatch, SetStateAction } from 'react'
  import type { RegisterSWOptions } from 'vite-plugin-pwa/types'

  export type { RegisterSWOptions }

  export function useRegisterSW(options?: RegisterSWOptions): {
    needRefresh: [boolean, Dispatch<SetStateAction<boolean>>]
    offlineReady: [boolean, Dispatch<SetStateAction<boolean>>]
    updateServiceWorker: (reloadPage?: boolean) => Promise<void>
  }
}

declare module 'https://cdn.jsdelivr.net/npm/cowsay@1.6.0/+esm' {
  export function say(options: { text: string; e?: string; T?: string }): string
  export function think(options: {
    text: string
    e?: string
    T?: string
  }): string
}
