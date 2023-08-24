import type { Meta, StoryObj } from '@storybook/react'

import { TextField } from './textField.tsx'

const meta: Meta<typeof TextField> = {
  title: 'Components/TextField',
  component: TextField,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      options: ['input' | 'inputWithIcon' | 'search'],
      control: { type: 'input' },
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Input: Story = {
  args: {
    variant: 'input',
  },
}
export const InputWithIcon: Story = {
  args: {
    variant: 'input',
  },
}
export const Search: Story = {
  args: {
    variant: 'input',
  },
}
