import { Button } from './button'
import { Meta, StoryObj } from '@storybook/react'
import Link from 'next/link'

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

export const AsLink: Story = {
  args: {
    ...Primary.args,
    variant: 'secondary',
    asChild: true,
    children: <a href={'/'}>GO HOME</a>,
  },
}
