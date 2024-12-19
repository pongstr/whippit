import { Meta, StoryObj } from '@storybook/react'

import Header from '@/components/header'

const meta: Meta<typeof Header> = {
  title: 'Section/Header',
  component: Header,
  parameters: {
    layout: 'centered',
  },
}

export default meta
type Story = StoryObj<typeof Header>

export const Main: Story = {
  args: {},
}
