import { FC, useState } from 'react'

import { Link, useParams } from 'react-router-dom'

import styles from './cards.module.scss'

import { Button, TextField, Typography } from '@/components'
import { CreateCardModal } from '@/components/customized/modals/card-modal/create-card-modal.tsx'
import { CardsTable } from '@/pages/cards-list/cards-table/CardsTable.tsx'
import CardsDrop from '@/pages/cards-list/cardsDrop.tsx'
import { useMeQuery } from '@/services/auth/auth.ts'
import { useGetCardsQuery } from '@/services/cards/cards.ts'
import { useGetDeckByIdQuery } from '@/services/decks/decks.ts'
import { ArrowBack } from '@/svg/arrow-back-outline.tsx'

type CardsProps = {}
export const Cards: FC<CardsProps> = ({}) => {
  // const navigate = useNavigate()
  const { deckId } = useParams<{ deckId: string }>()

  const { data: { id: authorId } = {} } = useMeQuery()
  const { data: dataCards } = useGetCardsQuery({
    id: deckId || '',
  })

  console.log('dataCards=' + dataCards)

  // if (dataCards === undefined || Object.keys(dataCards).length === 0) {
  //   return <PacksList />
  // }
  const { data: { name: cardName, userId: currentId } = {} } = useGetDeckByIdQuery({
    id: deckId || '',
  })

  const [openModalNewCard, setOpenModalNewCard] = useState(false)

  const isMyCard = currentId === authorId

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
        <div className={styles.headerDeckInfo}>
          <Typography variant={'large'}>{cardName}</Typography>
          {isMyCard && <CardsDrop deckId={deckId ? deckId : ''} cardName={cardName} />}
        </div>

        {isMyCard && dataCards?.items.length !== 0 && (
          <Button variant={'primary'} onClick={createNewCardButton}>
            Add New Card
          </Button>
        )}
        {!isMyCard && dataCards?.items.length !== 0 && (
          <Button variant={'primary'} disabled={dataCards?.items.length === 0}>
            Learn to Pack
          </Button>
        )}
      </div>
      <TextField className={styles.inputSearch} variant={'search'} />
      <CardsTable
        data={dataCards && dataCards.items}
        isMyCard={isMyCard}
        createNewCardButton={createNewCardButton}
      />
      {openModalNewCard && <CreateCardModal setModal={setOpenModalNewCard} deckId={deckId} />}
    </div>
  )
}
