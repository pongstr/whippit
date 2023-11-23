import React from 'react'

import Pongstr from '@/components/Header/Pongstr'
import ThemeSwitcher from '@/components/ThemeSwitcher'

const Header: React.FC = () => {
  return (
    <header className="sticky top-0 z-50  w-full items-center  border-b bg-background backdrop-blur-lg">
      <div className="container flex justify-between py-4">
        <div className="flex items-center justify-start">
          <Pongstr style={{ width: 26, height: 26 }} />
          <h1 className="indent-2 text-2xl font-extrabold tracking-tighter">
            <a href="/">whippit.</a>
          </h1>
        </div>
        <ThemeSwitcher />
      </div>
    </header>
  )
}

export default Header
