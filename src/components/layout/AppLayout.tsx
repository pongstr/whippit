import React, { lazy } from 'react'

import { settings$ } from '@/store'

const Header = lazy(() => import('@/components/header/Header'))
const Footer = lazy(() => import('@/components/footer/Footer'))

const AppLayout: React.FC<React.PropsWithChildren> = ({ children }) => {
  const theme = settings$.theme.get()

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
    <>
      <Header />
      {children}
      <Footer />
    </>
  )
}

export default AppLayout
