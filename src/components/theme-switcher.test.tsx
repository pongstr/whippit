import { render, screen } from '@testing-library/react'
import { userEvent } from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'

import ThemeSwitcher from '@/components/theme-switcher'

describe('<ThemeSwitcher /> Component', () => {
  it('should be present in the page', () => {
    const cmp = render(<ThemeSwitcher />)
    expect(cmp).toBeTruthy()
  })

  it('renders component in theme modes mode', async () => {
    render(<ThemeSwitcher />)

    expect(screen.getByTestId('trigger')).toHaveAttribute(
      'data-selected-theme',
      'dark',
    )

    await userEvent.click(screen.getByTestId('trigger'))
    expect(screen.getByTestId('theme-button-dark')).toBeInTheDocument()

    await userEvent.click(screen.getByTestId('theme-button-dark'))

    expect(screen.getByTestId('trigger')).toHaveAttribute(
      'data-selected-theme',
      'dark',
    )
    expect(screen.getByTestId('theme-switch-container')).toHaveAttribute(
      'data-theme',
      'dark',
    )
  })
})
