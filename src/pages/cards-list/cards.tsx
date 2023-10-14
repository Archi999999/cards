import { FC, useState } from 'react'

import { useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom'

import styles from './cards.module.scss'

import { Button, TextField, Typography } from '@/components'
import { CreateCardModal } from '@/components/customized/modals/card-modal/create-card-modal.tsx'
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

  const [openModalNewCard, setOpenModalNewCard] = useState(false)

  const userId = useSelector<RootState, string>(state => state.cardsSlice.userId)
  const cardsName = useSelector<RootState, string>(state => state.cardsSlice.nameCard)
  const isMyCard = userId === authorId

  const createNewCardButton = () => {
    setOpenModalNewCard(true)
  }

  return (
    <div className={styles.wrapper}>
      <Link className={styles.linkBack} to={`/`}>
        <ArrowBack />
        <Typography variant={'body_2'}> Back to Packs List</Typography>
      </Link>
      <div className={styles.headerCards}>
        <Typography variant={'large'}>{cardsName}</Typography>
        {isMyCard && dataCards?.items.length !== 0 && (
          <Button variant={'primary'} onClick={createNewCardButton}>
            Add New Card
          </Button>
        )}
        {!isMyCard && dataCards?.items.length === 0 && (
          <Button variant={'primary'} disabled={dataCards?.items.length === 0}>
            Learn to Pack
          </Button>
        )}
      </div>
      <TextField className={styles.inputSearch} variant={'search'} />
      <CardsTable data={dataCards && dataCards.items} isMyCard={isMyCard} />
      {openModalNewCard && <CreateCardModal setModal={setOpenModalNewCard} deckId={deckId} />}
    </div>
  )
}
