import s from '../header.module.scss'

import { Typography } from '@/components/ui/typography/typography.tsx'

export const UserHeader = () => {
  const name = 'Ivan'

  return (
    <div className={s.userHeader}>
      <Typography variant={'subtitle_1'} className={s.headerSpan}>
        {name}
      </Typography>
      <div
        style={{ width: '36px', height: '36px', backgroundColor: 'white', borderRadius: '50%' }}
      ></div>
    </div>
  )
}
