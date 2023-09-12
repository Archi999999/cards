import { FC } from 'react'

import { Link } from 'react-router-dom'

import s from './header.module.scss'

import { Button } from '@/components/ui'
import { UserHeader } from '@/components/ui/header/user-header'
import { Typography } from '@/components/ui/typography/typography.tsx'
import { Logo } from '@/svg'

type Props = {
  isAuth: boolean
}

export const Header: FC<Props> = ({ isAuth }) => {
  return (
    <header className={s.header}>
      <Logo />
      {isAuth ? (
        <UserHeader />
      ) : (
        <Button variant={'primary'} as={Link} to={'/'}>
          <Typography>Sign in</Typography>
        </Button>
      )}
    </header>
  )
}
