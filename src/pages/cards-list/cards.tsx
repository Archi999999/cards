import { useEffect, useState } from 'react'

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

export type Sort = {
  key: string
  direction: 'asc' | 'desc'
} | null
export const Cards = () => {
  const navigate = useNavigate()
  const { deckId } = useParams<{ deckId: string }>()
  const [sort, setSort] = useState<Sort>({ key: 'updated', direction: 'asc' })
  const [value, setValue] = useState('')

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(cardsSlice.actions.setDeckID(deckId!))
  }, [])

  let { data: dataMe } = useMeQuery()
  const authorId = dataMe && dataMe.id
  const { data: dataCards, isFetching: isCardDadaLoading } = useGetCardsQuery({
    id: deckId || '',
    orderBy: `${sort?.key}-${sort?.direction}`,
    question: value,
  })

  const { data, isError, isLoading } = useGetDeckByIdQuery({
    id: deckId!,
  })

  const { name: deckName, userId: currentId, isPrivate, cover } = data ? data : ({} as DeckById)

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
    <div className={styles.wrapper}>
      <Link className={styles.linkBack} to={`/`}>
        <ArrowBack />
        <Typography variant={'body_2'}> Back to Packs List</Typography>
      </Link>
      <div className={styles.headerCards}>
        <div className={styles.headerDeckInfo}>
          <Typography variant={'large'}>{deckName}</Typography>
          {isMyCard && (
            <CardsDrop
              deckId={deckId || ''}
              deckName={deckName}
              isPrivate={isPrivate}
              cover={cover ?? ''}
            />
          )}
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
      <TextField
        className={styles.inputSearch}
        variant={'search'}
        value={value}
        onValueChange={setValue}
      />
      <CardsTable
        data={dataCards && dataCards.items}
        isMyCard={isMyCard}
        createNewCardButton={createNewCardButton}
        sort={sort}
        setSort={setSort}
        isCardDadaLoading={isCardDadaLoading}
      />

      {openModalNewCard && <CreateCardModal setModal={setOpenModalNewCard} deckId={deckId || ''} />}
    </div>
  )
}
