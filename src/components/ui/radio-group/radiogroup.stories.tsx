import type { Meta, StoryObj } from '@storybook/react'

import { RadioGroup } from '@/components/ui/radio-group/radiogroup.tsx'

const technologies = [
  { id: '1', value: 'React' },
  { id: '2', value: 'Redux' },
  { id: '3', value: 'HTML' },
  { id: '4', value: 'CSS' },
  { id: '5', value: 'REST API' },
]
const meta = {
  title: 'Components/RadioGroup',
  component: RadioGroup,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof RadioGroup>

export default meta
type Story = StoryObj<typeof meta>

export const RadioGroupStory: Story = {
  args: {
    disabled: false,
    options: technologies,
  },
}

export const RadioGroupDisabled: Story = {
  args: {
    disabled: true,
    options: technologies,
  },
}
