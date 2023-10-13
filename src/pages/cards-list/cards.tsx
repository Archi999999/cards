import { FC } from 'react'

import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

import styles from './cards.module.scss'

import { Button, TextField, Typography } from '@/components'
import { CardsTable } from '@/pages/cards-list/cards-table/CardsTable.tsx'
import { useMeQuery } from '@/services/auth/auth.ts'
import { useGetCardsQuery } from '@/services/cards/cards.ts'
import { RootState } from '@/services/store.ts'
import { ArrowBack } from '@/svg/arrow-back-outline.tsx'

type CardsProps = {}
export const Cards: FC<CardsProps> = ({}) => {
  const { deckId } = useParams<{ deckId: string }>()

  const { data: dataCards } = useGetCardsQuery({
    id: deckId || '',
  })
  const { data: { id: authorId } = {} } = useMeQuery()

  ta
  const userId = useSelector<RootState, string>(state => state.cardsSlice.userId)
  const cardsName = useSelector<RootState, string>(state => state.cardsSlice.nameCard)
  const isMyCard = userId === authorId

  return (
    <div className={styles.wrapper}>
      <div className={styles.linkBack}>
        <ArrowBack />
        <Typography variant={'body_2'}> Back to Packs List</Typography>
      </div>
      <div className={styles.headerCards}>
        <Typography variant={'large'}>{cardsName}</Typography>
        <Button variant={'primary'} disabled={dataCards?.items.length === 0}>
          {isMyCard ? 'Add New Card' : 'Learn to Pack'}
        </Button>
      </div>
      <TextField className={styles.inputSearch} variant={'search'} />
      <CardsTable data={dataCards && dataCards.items} isMyCard={isMyCard} />
    </div>
  )
}
