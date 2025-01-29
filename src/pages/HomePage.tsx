import { ArrowRight } from 'lucide-react'
import React, { lazy } from 'react'

import AppLayout from '@/components/layouts/app-layout'
import { Transition } from '@/components/transition'

const Counter = lazy(() =>
  import('@/components/counter').then((module) => ({
    default: module.Counter,
  })),
)

const WorkerDemo = lazy(() =>
  import('@/components/worker-demo').then((module) => ({
    default: module.WorkerDemo,
  })),
)

const HomePage: React.FC = () => {
  return (
    <AppLayout>
      <main className="mx-4 flex h-[calc(100dvh_-_105px)] items-center justify-center py-4 md:container sm:mx-auto">
        <Transition>
          <h2 className="block pb-2 text-5xl font-bold tracking-tighter md:text-7xl">
            <span>Boilerplate</span>
          </h2>
          <span className="block  text-sm font-bold md:text-base">
            <span className="bg-gradient-to-r from-pink-500 to-violet-500 bg-clip-text text-transparent">
              a React app prototype kickstarter.
            </span>
          </span>
          <ul className="space-y-2 py-8 font-mono text-sm">
            <li>
              <a
                className="flex items-center justify-start gap-2 text-slate-600 transition-colors hover:text-blue-600"
                target="_blank"
                href="https://ui.shadcn.com/docs"
                rel="noreferrer"
              >
                <ArrowRight className="size-4" />
                <span>Shadcn UI</span>
              </a>
            </li>
            <li>
              <a
                className="flex items-center justify-start gap-2 text-slate-600 transition-colors hover:text-blue-600"
                target="_blank"
                href="https://legendapp.com/open-source/state/intro/introduction/"
                rel="noreferrer"
              >
                <ArrowRight className="size-4" />
                <span>Legend State</span>
              </a>
            </li>
            <li>
              <a
                className="flex items-center justify-start gap-2 text-slate-600 transition-colors hover:text-blue-600"
                target="_blank"
                href="https://github.com/molefrog/wouter"
                rel="noreferrer"
              >
                <ArrowRight className="size-4" />
                <span>Wouter</span>
              </a>
            </li>
          </ul>

          <div className="flex w-full flex-col items-center justify-center">
            <Counter />
            <WorkerDemo />
          </div>
        </Transition>
      </main>
    </AppLayout>
  )
}

export default HomePage
