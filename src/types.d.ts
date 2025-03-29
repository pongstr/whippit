declare module 'virtual:pwa-register/react' {
  import type { Dispatch, SetStateAction } from 'react'
  import type { RegisterSWOptions } from 'vite-plugin-pwa/types'

  export type { RegisterSWOptions }

  export function useRegisterSW(_options?: RegisterSWOptions): {
    needRefresh: [boolean, Dispatch<SetStateAction<boolean>>]
    offlineReady: [boolean, Dispatch<SetStateAction<boolean>>]
    updateServiceWorker: (_reloadPage?: boolean) => Promise<void>
  }
}

declare global {
  namespace App {
    type Settings = {
      theme: 'light' | 'dark' | 'system'
      counter: number
      userSettings: {
        currentTab: 'dashboard' | 'projects' | 'tasks' | 'appearance' | 'forms'
        skinTone: number
        view: 'grid' | 'list' | 'board'
      }
      featureFlag: Record<string, boolean>
    }
  }
}

export {}
