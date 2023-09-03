import type { Meta, StoryObj } from '@storybook/react'

import { SelectSecond } from '@/components/ui/select/selectSecond.tsx'

const meta = {
  title: 'Components/Select',
  component: SelectSecond,
  tags: ['autodocs'],
  argTypes: { onValueChange: { action: 'select changes' } },
} satisfies Meta<typeof SelectSecond>

export default meta
type Story = StoryObj<typeof meta>

const technologies = [
  { id: '1', value: 'React' },
  { id: '2', value: 'Redux' },
  { id: '3', value: 'HTML' },
  { id: '4', value: 'CSS' },
  { id: '5', value: 'REST API' },
]

export const SelectStory: Story = {
  args: {
    label: 'Technologies',
    placeholder: 'Select tech',
    disabled: false,
    options: technologies,
  },
}

export const SelectStoryDisabled: Story = {
  args: {
    label: 'Technologies',
    placeholder: 'Select tech',
    disabled: true,
    options: technologies,
  },
}
export const SelectPersonDisabled: Story = {
  args: {
    label: 'Technologies',
    placeholder: 'Select tech',
    disabled: false,
    options: technologies,
  },
}
