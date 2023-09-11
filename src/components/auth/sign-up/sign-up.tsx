import s from './sign-up.module.scss'

import { Typography } from '@/components'
import { Card } from '@/components/ui/card/card.tsx'
import { Pagination } from '@/components/ui/pagination'

export const SignUp = () => {
  return (
    <div className={s.signUp}>
      <Card>
        <Typography variant={'large'}>In Processing...</Typography>
        <Pagination itemsPerPage={10} currentPage={2} totalPages={55} />
      </Card>
    </div>
  )
}
