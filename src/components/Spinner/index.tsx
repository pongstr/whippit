import { RefreshCcw } from 'lucide-react'
import React from 'react'

import { Transition } from '@/components/transition/Transition'
import { cn } from '@/components/utils'

export const Spinner: React.FC<{ className?: string }> = ({
  className = '',
}) => (
  <Transition>
    <div
      className={cn(
        'flex h-screen w-full items-center justify-center',
        className,
      )}
    >
      <RefreshCcw className="mx-auto size-6 animate-spin text-cyan-600" />
    </div>
  </Transition>
)
