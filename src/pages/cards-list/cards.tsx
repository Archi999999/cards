import { FC, useEffect, useState } from 'react'

import { useDispatch } from 'react-redux'
import { Link, useNavigate, useParams } from 'react-router-dom'
import 'react-toastify/dist/ReactToastify.css'

import styles from './cards.module.scss'

import { Button, TextField, Typography } from '@/components'
import { CreateCardModal } from '@/components/customized/modals/card-modal/create-card-modal.tsx'
import { CardsTable } from '@/pages/cards-list/cards-table/CardsTable.tsx'
import CardsDrop from '@/pages/cards-list/cardsDrop.tsx'
import { LoaderRotating } from '@/pages/loader/loader-rotating.tsx'
import { useMeQuery } from '@/services/auth/auth.ts'
import { cardsSlice } from '@/services/cards/cards.slice.ts'
import { useGetCardsQuery } from '@/services/cards/cards.ts'
import { useGetDeckByIdQuery } from '@/services/decks/decks.ts'
import { DeckById } from '@/services/decks/types.ts'
import { ArrowBack } from '@/svg/arrow-back-outline.tsx'

type CardsProps = {}
export const Cards: FC<CardsProps> = ({}) => {
  const navigate = useNavigate()
  const { deckId } = useParams<{ deckId: string }>()

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(cardsSlice.actions.setDeckID(deckId!))
  }, [])

  const { data: { id: authorId } = {} } = useMeQuery()
  const { data: dataCards } = useGetCardsQuery({
    id: deckId || '',
  })

  const { data, isError, isLoading } = useGetDeckByIdQuery({
    id: deckId!,
  })

  const { name: deckName, userId: currentId } = data ? data : ({} as DeckById)

  if (isError && !deckName) {
    navigate('/')
  }

  const [openModalNewCard, setOpenModalNewCard] = useState(false)

  const isMyCard = currentId === authorId

  const createNewCardButton = () => {
    setOpenModalNewCard(true)
  }

  if (isLoading) return <LoaderRotating />

  return (
    <>
      <div className={styles.wrapper}>
        <Link className={styles.linkBack} to={`/`}>
          <ArrowBack />
          <Typography variant={'body_2'}> Back to Packs List</Typography>
        </Link>
        <div className={styles.headerCards}>
          <div className={styles.headerDeckInfo}>
            <Typography variant={'large'}>{deckName}</Typography>
            {isMyCard && <CardsDrop deckId={deckId ? deckId : ''} deckName={deckName} />}

          </div>

          {isMyCard && dataCards?.items.length !== 0 && (
            <Button variant={'primary'} onClick={createNewCardButton}>
              Add New Card
            </Button>
          )}
          {!isMyCard && dataCards?.items.length !== 0 && (
            <Button
              variant={'primary'}
              disabled={dataCards?.items.length === 0}
              onClick={() => {
                navigate(`/learn/${deckId}`)
              }}
            >
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
        {openModalNewCard && (
          <CreateCardModal setModal={setOpenModalNewCard} deckId={deckId ? deckId : ''} />
        )}
      </div>
    </>
  )
}
