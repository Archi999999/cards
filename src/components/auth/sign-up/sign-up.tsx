import s from './sign-up.module.scss'

import { Typography } from '@/components'
import { Card } from '@/components/ui/card/card.tsx'

export const SignUp = () => {
  return (
    <div className={s.signUp}>
      <Card>
        <Typography variant={'large'}>In Processing...</Typography>
      </Card>
    </div>
  )
}
