import { useSelector } from '@legendapp/state/react'
import { Minus, Plus } from 'lucide-react'
import React from 'react'

import { Button } from '@/components/ui/button'
import { settings$ } from '@/store'

type ButtonCounterPropType = {
  text: 'increment' | 'decrement'
}

const ButtonCounter: React.FC<ButtonCounterPropType> = ({ text }) => {
  const counter = useSelector(() => settings$.counter.get())

  const increment = (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault()
    settings$.counter.set(settings$.get().counter + 1)
  }

  const decrement = (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault()
    settings$.counter.set(settings$.get().counter - 1)
  }

  return (
    <Button
      className="m-0"
      variant="outline"
      onClick={text === 'decrement' ? decrement : increment}
      disabled={text === 'decrement' && counter === 0}
      data-testid={`button-${text}`}
    >
      {text === 'decrement' ? (
        <Minus className="size-5" />
      ) : (
        <Plus className="size-5" />
      )}
      <span className="sr-only">{text}</span>
    </Button>
  )
}

const CounterLabel: React.FC = () => {
  const counter = useSelector(() => settings$.counter.get())

  return (
    <div className="flex w-20 select-none items-center justify-center rounded border bg-background">
      <span data-testid="counter-value">{counter}</span>
    </div>
  )
}

export const Counter: React.FC = () => {
  return (
    <div className="inline-flex items-stretch justify-between gap-1 rounded-xl border p-1">
      <ButtonCounter text="decrement" />
      <CounterLabel />
      <ButtonCounter text="increment" />
    </div>
  )
}
