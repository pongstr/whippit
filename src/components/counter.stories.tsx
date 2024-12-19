import { Meta, StoryObj } from '@storybook/react'

import { Counter } from '@/components/counter'

const meta: Meta<typeof Counter> = {
  title: 'components/Counter',
  component: Counter,
  parameters: {
    layout: 'centered',
  },
}

export default meta
type Story = StoryObj<typeof Counter>

export const Main: Story = {
  args: {},
  render: () => <Counter />,
}
