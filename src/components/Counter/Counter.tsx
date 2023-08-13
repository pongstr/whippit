import React from 'react'
import { MinusCircleIcon, PlusCircleIcon } from '@heroicons/react/24/outline'
import { useSelector } from '@legendapp/state/react'
import { settings$ } from '@/store'
import './style.css'

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
  <button
    onClick={fn}
    disabled={disabled ?? false}
    data-testid={`button-${text}`}
  >
    {text === 'decrement' ? (
      <MinusCircleIcon className="h-8 w-8" />
    ) : (
      <PlusCircleIcon className="h-8 w-8" />
    )}
    <span className="sr-only">{text}</span>
  </button>
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
    <div className="counter-container">
      <ButtonCounter fn={decrement} text="decrement" disabled={counter === 0} />

      <div className="counter-value">
        <span data-testid="counter-value">{counter}</span>
      </div>

      <ButtonCounter fn={increment} text="increment" />
    </div>
  )
}
