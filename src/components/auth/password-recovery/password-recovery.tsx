import s from './password-recovery.module.scss'

import { Typography } from '@/components'
import { Card } from '@/components/ui/card/card.tsx'

export const PasswordRecovery = () => {
  return (
    <div className={s.recovery}>
      <Card>
        <Typography variant={'large'} as={'h1'}>
          Forgot your password?
        </Typography>
      </Card>
    </div>
  )
}
