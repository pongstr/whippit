import { observer } from '@legendapp/state/react'
import { Laptop2, Lightbulb, LightbulbOff } from 'lucide-react'
import React, { FC } from 'react'

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { cn } from '@/components/utils'
import { AppSettingsType, settings$ } from '@/store'

const ThemeIcon: FC<{ theme: AppSettingsType['theme'] }> = ({ theme }) => {
  switch (theme) {
    case 'light':
      return <Lightbulb className="size-4" />
    case 'dark':
      return <LightbulbOff className="size-4" />
    default:
      return <Laptop2 className="m-px size-4" />
  }
}

const ThemeSwitcher: React.FC = observer(() => {
  const theme = settings$.theme.get()

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
    <div data-testid="theme-switch-container" data-theme={theme}>
      <DropdownMenu>
        <DropdownMenuTrigger
          className="flex size-8 items-center justify-center rounded-full border p-0"
          data-testid="trigger"
          data-selected-theme={theme}
        >
          <ThemeIcon theme={theme} />
        </DropdownMenuTrigger>
        <DropdownMenuContent
          className="space-y-1 rounded-2xl p-2"
          sideOffset={12}
          alignOffset={-6}
          align="end"
        >
          <DropdownMenuItem
            onSelect={() => setTheme('light')}
            data-testid="theme-button-light"
            data-theme="light"
            className={cn(
              theme === 'light' ? 'bg-muted/30' : '',
              'rounded-lg py-1 px-3 transition-colors',
            )}
          >
            Light
          </DropdownMenuItem>
          <DropdownMenuItem
            data-testid="theme-button-dark"
            data-theme="dark"
            onClick={() => setTheme('dark')}
            className={cn(
              theme === 'dark' ? 'bg-muted/30' : '',
              'rounded-lg py-1 px-3 transition-colors',
            )}
          >
            Dark
          </DropdownMenuItem>
          <DropdownMenuItem
            onSelect={() => setTheme('system')}
            data-testid="theme-button-system"
            data-theme="system"
            className={cn(
              theme === 'system' ? 'bg-muted/30' : '',
              'rounded-lg py-1 px-3 transition-colors',
            )}
          >
            System
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  )
})

export default ThemeSwitcher
