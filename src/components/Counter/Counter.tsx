import { useSelector } from '@legendapp/state/react'
import { Minus, Plus } from 'lucide-react'
import React from 'react'

import { Button } from '@/components/ui/button'
import { settings$ } from '@/store'

type ButtonCounterPropType = {
  fn: (e: React.FormEvent<HTMLButtonElement>) => void
  disabled?: boolean
  text: 'increment' | 'decrement'
}

const ButtonCounter: React.FC<ButtonCounterPropType> = ({
  disabled = false,
  text,
  fn,
}) => (
  <Button
    className="m-0"
    variant="outline"
    onClick={fn}
    disabled={disabled ?? false}
    data-testid={`button-${text}`}
  >
    {text === 'decrement' ? (
      <Minus className="h-5 w-5" />
    ) : (
      <Plus className="h-5 w-5" />
    )}
    <span className="sr-only">{text}</span>
  </Button>
)

export const Counter: React.FC = () => {
  const counter = useSelector(() => settings$.get().counter)

  const increment = React.useCallback(
    (e: React.FormEvent<HTMLButtonElement>) => {
      e.preventDefault()
      settings$.counter.set(settings$.get().counter + 1)
    },
    [],
  )

  const decrement = React.useCallback(
    (e: React.FormEvent<HTMLButtonElement>) => {
      e.preventDefault()
      settings$.counter.set(settings$.get().counter - 1)
    },
    [],
  )

  return (
    <div className="inline-flex items-stretch justify-between gap-1 rounded-xl border bg-muted p-1">
      <ButtonCounter fn={decrement} text="decrement" disabled={counter === 0} />
      <div className="flex w-20 select-none items-center justify-center rounded border bg-background">
        <span data-testid="counter-value">{counter}</span>
      </div>
      <ButtonCounter fn={increment} text="increment" />
    </div>
  )
}
