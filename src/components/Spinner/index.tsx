import { RefreshCcw } from 'lucide-react'
import React from 'react'

import TransitionWrapper from '@/components/TransitionWrapper'
import { cn } from '@/components/utils'

const Spinner: React.FC<{ className?: string }> = ({ className = '' }) => (
  <TransitionWrapper>
    <div
      className={cn(
        'flex h-screen w-full items-center justify-center',
        className,
      )}
    >
      <RefreshCcw className="mx-auto h-6 w-6 animate-spin text-cyan-600" />
    </div>
  </TransitionWrapper>
)

export default Spinner
