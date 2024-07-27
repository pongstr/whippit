import { act, render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'

import { Counter } from './Counter'

describe('<Counter /> Compoennt', () => {
  it('render component', () => {
    render(<Counter />)

    expect(screen).toBeTruthy()
    expect(screen.getByTestId('counter-value')).toHaveTextContent('0')
    expect(screen.getByTestId('button-decrement')).toBeInTheDocument()
    expect(screen.getByTestId('button-increment')).toBeInTheDocument()
    expect(screen.getByTestId('button-decrement')).toHaveAttribute('disabled')
    expect(screen.getByTestId('button-increment')).to.not.toHaveAttribute(
      'disabled',
    )
  })

  it('increment counter', () => {
    render(<Counter />)

    expect(screen.getByTestId('counter-value')).toHaveTextContent('0')
    act(() => void screen.getByTestId('button-increment').click())
    expect(screen.getByTestId('counter-value')).toHaveTextContent('1')
    expect(screen.getByTestId('button-decrement')).to.not.toHaveAttribute(
      'disabled',
    )
  })

  it('decrement counter', () => {
    render(<Counter />)

    expect(screen.getByTestId('counter-value')).toHaveTextContent('1')
    act(() => void screen.getByTestId('button-decrement').click())
    expect(screen.getByTestId('counter-value')).toHaveTextContent('0')
    expect(screen.getByTestId('button-decrement')).toHaveAttribute('disabled')
  })
})
