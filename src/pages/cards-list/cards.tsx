import { FC } from 'react'

import { useParams } from 'react-router-dom'

import styles from './cards.module.scss'

import { Button, TextField, Typography } from '@/components'
import { CardsTable } from '@/pages/cards-list/cards-table/CardsTable.tsx'
import { useGetCardsQuery } from '@/services/cards/cards.ts'
import { ArrowBack } from '@/svg/arrow-back-outline.tsx'

type CardsProps = {}
export const Cards: FC<CardsProps> = ({}) => {
  const { deckId } = useParams<{ deckId: string }>()

  const { data: dataCards } = useGetCardsQuery({
    id: deckId || '',
  })

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
      <CardsTable data={dataCards && dataCards.items} />
    </div>
  )
}
