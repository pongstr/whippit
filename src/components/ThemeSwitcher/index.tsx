import { Laptop2, Moon, SunDimIcon } from 'lucide-react'
import React from 'react'

import { cn } from '@/components/utils'
import { AppSettingsType, settings$ } from '@/store'

const ThemeSwitcher: React.FC = () => {
  const theme = settings$.theme.use()

  const setTheme = (theme: AppSettingsType['theme']) =>
    settings$.theme.set(theme)

  React.useEffect(() => {
    const root = window.document.documentElement

    root.classList.remove('light', 'dark')

    if (theme === 'system') {
      const systemTheme = window.matchMedia('(prefers-color-scheme: dark)')
        .matches
        ? 'dark'
        : 'light'

      root.classList.add(systemTheme)
      return
    }

    root.classList.add(theme)
  }, [theme])

  return (
    <div
      data-testid="theme-switch-container"
      data-theme={theme}
      className="border-latte-surface2/[0.5] flex items-center justify-end gap-4 rounded-full border bg-transparent px-[6px] py-[3px] dark:border-zinc-800"
    >
      <button
        data-testid="theme-button-light"
        data-theme={theme}
        onClick={() => setTheme('light')}
        className={cn(
          theme === 'light' ? 'bg-muted' : '',
          'rounded-full p-1 transition-colors',
        )}
      >
        <SunDimIcon className="h-4 w-4" />
      </button>
      <button
        data-testid="theme-button-system"
        data-theme={theme}
        onClick={() => setTheme('system')}
        className={cn(
          theme === 'system' ? 'bg-muted' : '',
          'rounded-full p-1 transition-colors',
        )}
      >
        <Laptop2 className="m-[1px] h-3 w-3" />
      </button>
      <button
        data-testid="theme-button-dark"
        data-theme={theme}
        onClick={() => setTheme('dark')}
        className={cn(
          theme === 'dark' ? 'bg-muted' : '',
          'rounded-full p-1 transition-colors',
        )}
      >
        <Moon className="h-4 w-4" />
      </button>
    </div>
  )
}

export default ThemeSwitcher
