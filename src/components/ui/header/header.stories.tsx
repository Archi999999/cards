import type { Meta, StoryObj } from '@storybook/react'

import { Header } from './header'

const meta = {
  title: 'Components/Header',
  component: Header,
  tags: ['autodocs'],
  argTypes: {
    isAuth: {
      options: [true, false],
      control: { type: 'radio' },
    },
  },
} satisfies Meta<typeof Header>

export default meta
type Story = StoryObj<typeof meta>

export const Authorized: Story = {
  args: {
    isAuth: true,
  },
}

export const Not_authorized: Story = {
  args: {
    isAuth: false,
  },
}
