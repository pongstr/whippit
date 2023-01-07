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

const ButtonCounter = React.memo((opt: ButtonCounterPropType) => (
  <button onClick={opt.fn} disabled={opt.disabled ?? false}>
    {opt.text === 'decrement' ? (
      <MinusCircleIcon className="w-8 h-8" />
    ) : (
      <PlusCircleIcon className="w-8 h-8" />
    )}
    <span className="sr-only">{opt.text}</span>
  </button>
))

const Counter: React.FC = () => {
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
        <span>{counter}</span>
      </div>

      <ButtonCounter fn={increment} text="increment" />
    </div>
  )
}

export default Counter
