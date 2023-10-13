// import type { Meta, StoryObj } from '@storybook/react'
//
// import { Header } from './header'
//
// const meta = {
//   title: 'Components/Header',
//   component: Header,
//   tags: ['autodocs'],
//   argTypes: {
//     isLoading: {
//       options: [true, false],
//       control: { type: 'radio' },
//     },
//     data: {
//       name: 'asda',
//     },
//   },
// } satisfies Meta<typeof Header>
//
// export default meta
// type Story = StoryObj<typeof meta>
//
// export const Authorized: Story = {
//   args: {
//     data: { name: 'Mike' },
//     isLoading: false,
//   },
// }
//
// export const Not_authorized: Story = {
//   args: {
//     data: 0,
//     isLoading: false,
//   },
// }

import { Provider } from 'react-redux'

import { Button, Header, Typography } from '@/components'
import s from '@/components/ui/header/header.module.scss'
import { store } from '@/services/store.ts'
import { Logo } from '@/svg'

export default {
  title: 'Components/Header',
  component: Header,
}

export const Authorized = () => (
  <Provider store={store}>
    <Header data={{ name: 'Mike' }} isLoading={false} />
  </Provider>
)

export const NonAuthorized = () => {
  return (
    <Provider store={store}>
      <header className={`${s.header}`}>
        <Logo />
        <Button variant={'primary'}>
          <Typography>Sign in</Typography>
        </Button>
      </header>
    </Provider>
  )
}
