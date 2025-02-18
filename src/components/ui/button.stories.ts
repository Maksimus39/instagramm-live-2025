import { Button } from './button'
import { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof Button> = {
  component: Button,
}

export default meta

type Story = StoryObj<typeof meta>
export const Primary: Story = {
  args: {
    children: 'Hello',
    onClick: () => alert('clicked'),
    title: 'Click alert props',
  },
}

export const Secondary: Story = {
  args: {
    ...Primary.args,
    variant: 'secondary',
  },
}
