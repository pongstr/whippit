import React, { lazy } from 'react'

const Header = lazy(() => import('@/components/header'))
const Footer = lazy(() => import('@/components/footer'))

const AppLayout: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  )
}

export default AppLayout
