import s from './header.module.scss'

import { Button } from '@/components/ui'
import Icon from '@/components/ui/icon/icon.tsx'
import { Typography } from '@/components/ui/typography/typography.tsx'
import { UserHeader } from '@/components/ui/user-header/userHeader.tsx'

export const Header = () => {
  const isAuth = false

  return (
    <div className={s.header}>
      <Icon id={'logo'} width={'157'} height={'36'} />
      {isAuth ? (
        <Button variant={'primary'}>
          <Typography>Sign in</Typography>
        </Button>
      ) : (
        <UserHeader />
      )}
    </div>
  )
}
