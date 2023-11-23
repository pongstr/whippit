import React from 'react'

const Footer: React.FC = () => {
  return (
    <footer className="container">
      <div className="flex items-center justify-start border-t border-t-border/[0.85] py-4 text-xs">
        <span className="text-secondary-foreground">
          Copyright 2023 &copy; Pongstr. MIT
        </span>
      </div>
    </footer>
  )
}

export default Footer
