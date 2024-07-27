import { BookOpenText, SquareCode } from 'lucide-react'
import React from 'react'
import { Link } from 'wouter'

import { buttonVariants } from '@/components/ui/button'
import { cn } from '@/components/utils'
import { settings$ } from '@/store'

const Pongstr: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg viewBox="0 0 312 247" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      d="M285.548 129.735V77.8431H259.596V51.8922H233.625V38.9216H259.596V0H220.659V25.9412H194.688V51.8922H116.812V25.9412H90.8607V0H51.9232V38.9216H77.875V51.8922H51.9232V77.8431H25.9713V129.735H0V220.549H38.9375V168.657H51.9232V220.549H77.875V246.5H142.784V207.578H90.8607V194.608H220.659V207.578H168.736V246.5H233.625V220.549H259.596V168.657H272.562V220.549H311.5V129.735H285.548ZM116.812 116.765H77.875V77.8431H116.812V116.765ZM233.625 116.765H194.688V77.8431H233.625V116.765Z"
      fill="currentColor"
    />
  </svg>
)

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
