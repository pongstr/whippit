import { BookOpenText, SquareCode } from 'lucide-react'
import React from 'react'
import { Link } from 'wouter'

import Pongstr from '@/components/header/Pongstr'
import { buttonVariants } from '@/components/ui/button'
import { cn } from '@/components/utils'
import { settings$ } from '@/store'

const Header: React.FC = () => {
  const flags = settings$.featureFlag.get()

  return (
    <header className="sticky top-0 z-50  w-full items-center border-b bg-background backdrop-blur-lg">
      <div className="flex justify-between p-4 md:container">
        <div className="flex items-center justify-start">
          <Pongstr style={{ width: 26, height: 26 }} />
          <h1 className="indent-2 text-2xl font-extrabold tracking-tighter">
            <Link to="/">whippit.</Link>
          </h1>
        </div>

        <nav className="flex items-center justify-end gap-1">
          {flags.pageReadme && (
            <Link
              to="/readme"
              className={(active: boolean) =>
                cn(
                  buttonVariants({ variant: 'link', size: 'sm' }),
                  'uppercase gap-1',
                  active ? 'text-foreground' : 'text-primary',
                )
              }
            >
              <BookOpenText className="size-3.5" />
              <span>Readme</span>
            </Link>
          )}

          {flags.pageExamples && (
            <Link
              to="/examples"
              className={(active: boolean) =>
                cn(
                  buttonVariants({ variant: 'link', size: 'sm' }),
                  'uppercase gap-1',
                  active ? 'text-foreground' : 'text-primary',
                )
              }
            >
              <SquareCode className="size-3.5" />
              <span>Snippets </span>
            </Link>
          )}
        </nav>
      </div>
    </header>
  )
}

export default Header
