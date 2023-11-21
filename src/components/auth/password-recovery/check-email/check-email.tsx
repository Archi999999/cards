import { useNavigate } from 'react-router-dom'

import s from './check-email.module.scss'

import { Button, Typography } from '@/components'
import { Card } from '@/components/ui/card/card.tsx'
import { CheckEmailIcon } from '@/svg/check-email-icon.tsx'

export const CheckEmail = () => {
  const navigate = useNavigate()

  return (
    <Card className={s.card}>
      <Typography variant={'large'} as={'h1'} className={s.title}>
        Check Email
      </Typography>
      <CheckEmailIcon />
      <Typography className={s.text}>
        We’ve sent an Email with instructions to example@mail.com
      </Typography>
      <Button className={s.button} fullWidth onClick={() => navigate('/login')}>
        Back to Sign in
      </Button>
    </Card>
  )
}
