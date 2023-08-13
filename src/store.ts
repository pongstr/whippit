import { observable } from '@legendapp/state'
import { enableLegendStateReact } from '@legendapp/state/react'
import { ObservablePersistIndexedDB } from '@legendapp/state/persist-plugins/indexeddb'
import {
  configureObservablePersistence,
  persistObservable,
} from '@legendapp/state/persist'

export type AppSettingsType = {
  theme: 'light' | 'dark'
  counter: number
}

export const TODO_SETTINGS = 'todo.settings'
export const TODO_LIST = 'todo.collection'

enableLegendStateReact()
configureObservablePersistence({
  persistLocal: ObservablePersistIndexedDB,
  persistLocalOptions: {
    indexedDB: {
      databaseName: 'pongstr',
      version: 1,
      tableNames: [TODO_LIST, TODO_SETTINGS],
    },
  },
})

export const settings$ = observable<AppSettingsType>({
  theme: 'light',
  counter: 0,
})

if (process.env.NODE_ENV !== 'test') {
  persistObservable(settings$, {
    local: {
      name: TODO_SETTINGS,
      indexedDB: {
        itemID: TODO_SETTINGS,
      },
    },
  })
}
