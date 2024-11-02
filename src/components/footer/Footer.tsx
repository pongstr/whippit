import React from 'react'

const Footer: React.FC = () => {
  return (
    <footer>
      <div className="flex items-center justify-center gap-4 px-4 py-3 font-mono text-[11px]">
        <span className="text-muted-foreground/65">
          Copyright 2024 &copy; Pongstr. MIT
        </span>
      </div>
    </footer>
  )
}

export default Footer
