import React from 'react'
import { MinusCircleIcon, PlusCircleIcon } from '@heroicons/react/24/outline'
import { useSettings } from '@/store'
import './style.css'

type ButtonCounterPropType = {
  fn: (e: React.FormEvent<HTMLButtonElement>) => void
  disabled?: boolean
  text: 'increment' | 'decrement'
}

const ButtonCounter = React.memo((opt: ButtonCounterPropType) => (
  <button onClick={opt.fn} disabled={opt.disabled ?? false}>
    {opt.text === 'decrement' ? (
      <MinusCircleIcon className="h-8 w-8" />
    ) : (
      <PlusCircleIcon className="h-8 w-8" />
    )}
    <span className="sr-only">{opt.text}</span>
  </button>
))

const Counter: React.FC = () => {
  const settings = useSettings()

  const increment = React.useCallback(
    (e: React.FormEvent<HTMLButtonElement>) => {
      e.preventDefault()
      settings.setCounter(settings.counter + 1)
    },
    [settings],
  )

  const decrement = React.useCallback(
    (e: React.FormEvent<HTMLButtonElement>) => {
      e.preventDefault()
      settings.setCounter(settings.counter + 1)
    },
    [settings],
  )

  return (
    <div className="counter-container">
      <ButtonCounter
        fn={decrement}
        text="decrement"
        disabled={settings.counter === 0}
      />

      <div className="counter-value">
        <span>{settings.counter}</span>
      </div>

      <ButtonCounter fn={increment} text="increment" />
    </div>
  )
}

export default Counter
