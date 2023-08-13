import { beforeAll, describe, expect, it } from 'vitest'
import { render, screen, act } from '@testing-library/react'
import { Header } from './Header'

describe('<Header /> Compoennt', () => {
  beforeAll(() => {
    window.ResizeObserver = class ResizeObserver {
      observe() {
        /* noop*/
      }
      unobserve() {
        /* noop*/
      }
      disconnect() {
        /* noop*/
      }
    }
  })

  it('render component in light mode', () => {
    render(<Header />)
    expect(screen.getByText('Prototypr')).toBeInTheDocument()
    expect(screen.getByTestId('theme-switcher')).toBeInTheDocument()
    expect(screen.getByTestId('theme-switch-container')).toHaveAttribute(
      'data-theme',
      'light',
    )
  })

  it('render component in dark mode', () => {
    render(<Header />)
    expect(screen.getByTestId('theme-switch-container')).toHaveAttribute(
      'data-theme',
      'light',
    )
    act(() => void screen.getByTestId('theme-switcher').click())
    expect(screen.getByTestId('theme-switch-container')).toHaveAttribute(
      'data-theme',
      'dark',
    )
  })
})
