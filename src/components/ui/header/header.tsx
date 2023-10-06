import { Link } from 'react-router-dom'

import s from './header.module.scss'

import { Button } from '@/components/ui'
import { UserHeader } from '@/components/ui/header/user-header'
import { Typography } from '@/components/ui/typography/typography.tsx'
import { useMeQuery } from '@/services/auth/auth.ts'
import { Logo } from '@/svg'

export const Header = () => {
  const { data, isLoading } = useMeQuery()

  // if (isLoading) {
  //   return <>Loading...</>
  // }

  const isAuth = !!data

  const name = data?.name
  const avatar = data?.avatar

  return (
    <header className={`${s.header}`}>
      <Logo />
      {!isAuth || isLoading ? (
        <Button variant={'primary'} as={Link} to={'/'}>
          <Typography>Sign in</Typography>
        </Button>
      ) : (
        <UserHeader name={name} avatar={avatar} />
      )}
    </header>
  )
}
