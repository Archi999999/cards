import { Meta, StoryObj } from '@storybook/react'

import { Header } from './header'

const meta: Meta = {
  title: 'Components/Header',
  component: Header,
  tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof meta>

export const HeaderWithButton: Story = {}
