import styles from './cards.module.scss'

import { Button, TextField, Typography } from '@/components'
import { CardsTable } from '@/pages/packs-list/CardsTable.tsx'
import { ArrowBack } from '@/svg/arrow-back-outline.tsx'

export const Cards = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.linkBack}>
        <ArrowBack />
        <Typography variant={'body_2'}> Back to Packs List</Typography>
      </div>
      <div className={styles.headerCards}>
        <Typography variant={'large'}>Name Pack</Typography>
        <Button variant={'primary'}>Learn to Pack</Button>
      </div>
      <TextField variant={'search'} />
      <CardsTable />
    </div>
  )
}
