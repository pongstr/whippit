import React from 'react'
import { RefreshCcw } from 'lucide-react'

import { cn } from '@/components/lib/utils'
import { Transition } from '@/components/transition'

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
