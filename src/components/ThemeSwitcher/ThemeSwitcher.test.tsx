import { act, render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'

import ThemeSwitcher from '.'

describe('<ThemeSwitcher /> Component', () => {
  it('should be present in the page', () => {
    const cmp = render(<ThemeSwitcher />)
    expect(cmp).toBeTruthy()
  })

  it('renders component in theme modes mode', () => {
    render(<ThemeSwitcher />)

    expect(screen.getByTestId('theme-button-light')).toHaveAttribute(
      'data-theme',
      'light',
    )

    act(() => void screen.getByTestId('theme-button-dark').click())
    expect(screen.getByTestId('theme-switch-container')).toHaveAttribute(
      'data-theme',
      'dark',
    )
  })
})
