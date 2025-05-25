import React, { FC } from 'react'
import { observer, useSelector } from '@legendapp/state/react'
import { Laptop2, Sun, SunMoon } from 'lucide-react'

import { cn } from '@/components/lib/utils'
import * as Dropdown from '@/components/ui/dropdown-menu'
import { settings$ } from '@/store'

const ThemeIcon: FC<{ theme: App.Settings['theme'] }> = ({ theme }) => {
  switch (theme) {
    case 'light':
      return <Sun className="size-4" />
    case 'dark':
      return <SunMoon className="size-4" />
    default:
      return <Laptop2 className="m-px size-4" />
  }
}

const ThemeSwitcher: React.FC = observer(() => {
  const theme = useSelector(() => settings$.theme.get())

  const setTheme = (theme: App.Settings['theme']) => settings$.theme.set(theme)

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
    <div data-testid="theme-switch-container" data-theme={theme}>
      <Dropdown.DropdownMenu>
        <Dropdown.DropdownMenuTrigger
          className="flex size-8 items-center justify-center rounded-full p-0 focus:bg-muted focus-visible:bg-muted active:bg-muted"
          data-testid="trigger"
          data-selected-theme={theme}
        >
          <ThemeIcon theme={theme} />
        </Dropdown.DropdownMenuTrigger>
        <Dropdown.DropdownMenuContent
          className="space-y-1 rounded-2xl p-2"
          sideOffset={12}
          alignOffset={-6}
          align="end"
        >
          <Dropdown.DropdownMenuItem
            onSelect={() => setTheme('light')}
            data-testid="theme-button-light"
            data-theme="light"
            className={cn(
              theme === 'light' ? 'bg-muted/30' : '',
              'rounded-lg py-1 px-3 transition-colors',
            )}
          >
            Light
          </Dropdown.DropdownMenuItem>
          <Dropdown.DropdownMenuItem
            data-testid="theme-button-dark"
            data-theme="dark"
            onClick={() => setTheme('dark')}
            className={cn(
              theme === 'dark' ? 'bg-muted/30' : '',
              'rounded-lg py-1 px-3 transition-colors',
            )}
          >
            Dark
          </Dropdown.DropdownMenuItem>
          <Dropdown.DropdownMenuItem
            onSelect={() => setTheme('system')}
            data-testid="theme-button-system"
            data-theme="system"
            className={cn(
              theme === 'system' ? 'bg-muted/30' : '',
              'rounded-lg py-1 px-3 transition-colors',
            )}
          >
            System
          </Dropdown.DropdownMenuItem>
        </Dropdown.DropdownMenuContent>
      </Dropdown.DropdownMenu>
    </div>
  )
})

export default ThemeSwitcher
