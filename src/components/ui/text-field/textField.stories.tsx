import type { Meta, StoryObj } from '@storybook/react'

import { TextField } from '@/components/ui/text-field/textField.tsx'

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

export const Email: Story = {
  args: {
    variant: 'input',
    name: 'email',
    label: 'Email',
  },
}
export const Password: Story = {
  args: {
    variant: 'inputWithIcon',
    name: 'password',
    label: 'Password',
  },
}
export const Search: Story = {
  args: {
    variant: 'search',
    name: 'text',
  },
}
export const InputWithError: Story = {
  args: {
    variant: 'inputWithIcon',
    name: 'password',
    label: 'Password',
    error: 'Password must be longer',
  },
}
