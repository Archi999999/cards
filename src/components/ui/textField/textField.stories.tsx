import type { Meta, StoryObj } from '@storybook/react'

import { TextField } from '@/components/ui/textField/textField.tsx'

const meta = {
  title: 'Components/TextField',
  component: TextField,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      options: ['input' || 'inputWithIcon' || 'search'],
    },
  },
} satisfies Meta<typeof TextField>

export default meta
type Story = StoryObj<typeof meta>

export const Input: Story = {
  args: {
    variant: 'input',
  },
}
export const InputWithIcon: Story = {
  args: {
    variant: 'inputWithIcon',
  },
}
export const Search: Story = {
  args: {
    variant: 'search',
  },
}
