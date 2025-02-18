import { Meta, StoryObj } from '@storybook/react'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select/select'

const meta = {
  component: Select,
} satisfies Meta<typeof Select>

export default meta

type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    children: (
      <>
        <SelectTrigger className='w-[180px]'>
          <SelectValue placeholder='Theme' />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value='light'>Light</SelectItem>
          <SelectItem value='dark'>Dark</SelectItem>
          <SelectItem value='system'>System</SelectItem>
        </SelectContent>
      </>
    ),
  },
}
