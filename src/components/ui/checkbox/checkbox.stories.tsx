// import type { Meta, StoryObj } from '@storybook/react'
//
// import { Checkbox } from '@/components/ui/checkbox/checkbox.tsx'
//
// const meta = {
//   title: 'Components/Checkbox',
//   component: Checkbox,
//   tags: ['autodocs'],
//   argTypes: {},
// } satisfies Meta<typeof Checkbox>
//
// export default meta
// type Story = StoryObj<typeof meta>
//
// export const Checked: Story = {}

import { useState } from 'react'

import type { StoryObj } from '@storybook/react'

import { Checkbox } from '@/components/ui/checkbox/checkbox.tsx'

const meta = {
  title: 'Components/Checkbox',
  component: Checkbox,
  tags: ['autodocs'],
  argTypes: {},
}

export default meta

type Story = StoryObj

// @ts-ignore
export const Checked: Story = () => {
  const [checked, setChecked] = useState(true)

  const handleChange = (newChecked: boolean) => {
    setChecked(newChecked)
  }

  return (
    <>
      <Checkbox name="Check box" checked={checked} onChange={handleChange} id={'123'} />
      <Checkbox name="Disable checked" disabled={true} checked={true} onChange={handleChange} />
      <Checkbox name="Disable unchecked" disabled={true} checked={false} onChange={handleChange} />
    </>
  )
}
