import { Meta, StoryObj } from '@storybook/react'

import Footer from '@/components/footer'

const meta: Meta<typeof Footer> = {
  title: 'Section/Footer',
  component: Footer,
  parameters: {
    layout: 'centered',
  },
}

export default meta
type Story = StoryObj<typeof Footer>

export const Main: Story = {
  args: {},
}
