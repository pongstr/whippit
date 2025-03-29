import { observable } from '@legendapp/state'
import {
  configureObservablePersistence,
  persistObservable,
} from '@legendapp/state/persist'
import { ObservablePersistIndexedDB } from '@legendapp/state/persist-plugins/indexeddb'

const TODO_SETTINGS = 'todo.settings'
const TODO_LIST = 'todo.collection'

export const settings$ = observable<App.Settings>({
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
