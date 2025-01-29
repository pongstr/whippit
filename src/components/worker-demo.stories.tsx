import { Meta, StoryObj } from '@storybook/react'

import { WorkerDemo } from '@/components/worker-demo'

const meta: Meta<typeof WorkerDemo> = {
  title: 'components/WorkerDemo',
  component: WorkerDemo,
  parameters: {
    layout: 'centered',
  },
}

export default meta
type Story = StoryObj<typeof WorkerDemo>

export const Main: Story = {
  args: {},
  render: () => <WorkerDemo />,
}
