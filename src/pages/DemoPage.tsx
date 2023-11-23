import { ArrowRight } from 'lucide-react'
import React from 'react'

import { Counter } from '@/components/Counter'

const DemoPage: React.FC = () => {
  return (
    <div className="flex min-h-[75vh] w-full items-center justify-between gap-24 lg:flex-row">
      <div>
        <h2 className="block pb-2 text-7xl font-bold tracking-tighter">
          <span>Boilerplate</span>
        </h2>
        <span className="block text-xl text-muted-foreground">
          a React app prototype kickstarter.
        </span>
        <ul className="space-y-2 py-8 text-lg">
          <li>
            <a
              className="flex items-center justify-start gap-2 text-slate-600 transition-colors hover:text-blue-600"
              target="_blank"
              href="https://ui.shadcn.com/docs"
              rel="noreferrer"
            >
              <ArrowRight className="h-4 w-4" />
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
              <ArrowRight className="h-4 w-4" />
              <span>Legend State</span>
            </a>
          </li>
        </ul>

        <Counter />
      </div>
    </div>
  )
}

export default DemoPage
