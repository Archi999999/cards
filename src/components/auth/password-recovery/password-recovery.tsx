import s from './password-recovery.module.scss'

import {Button, TextField, Typography} from '@/components'
import { Card } from '@/components/ui/card/card.tsx'

export const PasswordRecovery = () => {
  return (
      <Card>
        <Typography variant={'large'} as={'h1'} className={s.title}>
          Forgot your password?
        </Typography>
        <TextField label={'Email'} />
        <Typography className={s.textInfo}>
          Enter your email address and we will send you further instructions
        </Typography>
        <Button>
          Send Instructions
        </Button>
        <div className={s.reminder}>
          <Typography className={s.textReminder}>
            Did you remember your password?
          </Typography>
          <Button variant={'link'}>Try logging in</Button>
        </div>
      </Card>
  )
}
