import { create } from 'zustand'

type StoreSetterType<T> = (value: T) => void

export type AppSettingsType = {
  theme: 'light' | 'dark'
  setTheme: StoreSetterType<'light' | 'dark'>

  counter: number
  setCounter: StoreSetterType<number>
}

export const APP_SETTINGS = 'app.settings'
export const APP_COLLECTION = 'app.collection'

export const useSettings = create<AppSettingsType>()((set) => ({
  theme: 'light',
  setTheme: (value: AppSettingsType['theme']) =>
    set((state) => ({ ...state, theme: value })),

  counter: 0,
  setCounter: (value: AppSettingsType['counter']) =>
    set((state) => ({ ...state, counter: value })),
}))
