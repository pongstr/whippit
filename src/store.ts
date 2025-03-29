import { observable } from '@legendapp/state'
import { enableReactTracking } from '@legendapp/state/config/enableReactTracking'
import {
  configureObservablePersistence,
  persistObservable,
} from '@legendapp/state/persist'
import { ObservablePersistIndexedDB } from '@legendapp/state/persist-plugins/indexeddb'

export type AppSettingsType = {
  theme: 'light' | 'dark' | 'system'
  counter: number
  userSettings: {
    currentTab: 'dashboard' | 'projects' | 'tasks' | 'appearance' | 'forms'
    skinTone: number
    view: 'grid' | 'list' | 'board'
  }
  featureFlag: Record<string, boolean>
}

export const TODO_SETTINGS = 'todo.settings'
export const TODO_LIST = 'todo.collection'

enableReactTracking({ auto: true })

export const settings$ = observable<AppSettingsType>({
  theme: 'dark',
  counter: 0,
  userSettings: {
    currentTab: 'appearance',
    skinTone: 9995,
    view: 'grid',
  },
  featureFlag: {
    pageReadme: false,
    pageExamples: false,
  },
})

if (import.meta.env.MODE !== 'test') {
  configureObservablePersistence({
    pluginLocal: ObservablePersistIndexedDB,
    localOptions: {
      indexedDB: {
        databaseName: 'pongstr',
        version: 1,
        tableNames: [TODO_LIST, TODO_SETTINGS],
      },
    },
  })

  persistObservable(settings$, {
    local: {
      name: TODO_SETTINGS,
      indexedDB: {
        itemID: TODO_SETTINGS,
      },
    },
  })
}
