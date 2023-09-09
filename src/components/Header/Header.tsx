import React from 'react'
import * as Switch from '@radix-ui/react-switch'
import { useSettings } from '@/store'
import './index.css'

export const Header: React.FC = () => {
  const settings = useSettings()

  const isEnabled = React.useMemo(
    (): boolean => (settings.theme === 'light' ? true : false),
    [settings],
  )

  const handleOnChange = React.useCallback(() => {
    if (settings.theme === 'light') {
      settings.setTheme('dark')
      return
    }

    if (settings.theme === 'dark') {
      settings.setTheme('light')
    }
  }, [settings])

  React.useEffect(() => {
    if (settings.theme === 'dark') {
      document.documentElement.classList.add('dark')
      return
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [settings])

  return (
    <header>
      <div className="flex items-center justify-start">
        <svg
          className="inline-block h-9 w-9"
          viewBox="0 0 312 247"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M285.548 129.735V77.8431H259.596V51.8922H233.625V38.9216H259.596V0H220.659V25.9412H194.688V51.8922H116.812V25.9412H90.8607V0H51.9232V38.9216H77.875V51.8922H51.9232V77.8431H25.9713V129.735H0V220.549H38.9375V168.657H51.9232V220.549H77.875V246.5H142.784V207.578H90.8607V194.608H220.659V207.578H168.736V246.5H233.625V220.549H259.596V168.657H272.562V220.549H311.5V129.735H285.548ZM116.812 116.765H77.875V77.8431H116.812V116.765ZM233.625 116.765H194.688V77.8431H233.625V116.765Z"
            fill="currentColor"
          />
        </svg>

        <h1 className="indent-2 text-2xl font-bold tracking-tighter">
          <a href="/">Prototypr</a>
        </h1>
      </div>
      <div>
        <form>
          <div
            data-testid="theme-switch-container"
            data-theme={settings.theme}
            style={{ display: 'flex', alignItems: 'center' }}
          >
            <label className="sr-only" htmlFor="airplane-mode">
              Theme
            </label>
            <Switch.Root
              className="SwitchRoot"
              data-testid="theme-switcher"
              checked={isEnabled}
              onCheckedChange={handleOnChange}
            >
              <Switch.Thumb className="SwitchThumb" />
            </Switch.Root>
          </div>
        </form>
      </div>
    </header>
  )
}
