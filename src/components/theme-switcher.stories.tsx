import { Meta, StoryObj } from '@storybook/react'
import { ThemeProvider } from 'next-themes'

import ThemeSwitcher from '@/components/theme-switcher'

const meta: Meta<typeof ThemeSwitcher> = {
  title: 'components/Theme Switcher',
  component: ThemeSwitcher,
  parameters: {
    layout: 'centered',
  },
}

export default meta
type Story = StoryObj<typeof ThemeSwitcher>

export const Main: Story = {
  args: {},
  render: () => (
    <ThemeProvider>
      <ThemeSwitcher />
    </ThemeProvider>
  ),
}
