import { Laptop2, MoonIcon, SunDim } from 'lucide-react'
import React from 'react'

import { settings$ } from '@/store'

const Footer: React.FC = () => {
  const theme = settings$.theme.get()
  const changeTheme = (e: React.FormEvent<HTMLButtonElement>) => {
    const target = e.currentTarget as HTMLButtonElement
    settings$.theme.set(target.dataset.theme as 'light' | 'dark' | 'system')
  }

  return (
    <footer>
      <div className="flex items-center justify-center gap-4 px-4 py-3 font-mono text-[11px]">
        <span className="text-muted-foreground/65">
          Copyright 2024 &copy; Pongstr. MIT
        </span>

        <button
          onClick={changeTheme}
          data-theme="light"
          className="disabled:cusor-not-allowed disabled:opacity-35"
          disabled={theme === 'light'}
        >
          <SunDim className="size-4" />
          <span className="sr-only">Light</span>
        </button>

        <button
          onClick={changeTheme}
          data-theme="dark"
          className="disabled:cusor-not-allowed disabled:opacity-35"
          disabled={theme === 'dark'}
        >
          <MoonIcon className="size-3.5" />
          <span className="sr-only">Dark</span>
        </button>

        <button
          onClick={changeTheme}
          data-theme="system"
          className="disabled:cusor-not-allowed disabled:opacity-35"
          disabled={theme === 'system'}
        >
          <Laptop2 className="size-3.5" />
          <span className="sr-only">System</span>
        </button>
      </div>
    </footer>
  )
}

export default Footer
