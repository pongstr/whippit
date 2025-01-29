import { createContext, FC, PropsWithChildren, useContext } from 'react'

const worker = new Worker(new URL('@/worker/worker.ts', import.meta.url), {
  type: 'module',
})

export const WorkerContext = createContext<{
  worker: Worker
}>({ worker: {} as Worker })

export function useWorker() {
  return useContext(WorkerContext)
}

export const WorkerProvider: FC<PropsWithChildren> = ({ children }) => {
  return (
    <WorkerContext.Provider value={{ worker }}>
      {children}
    </WorkerContext.Provider>
  )
}
