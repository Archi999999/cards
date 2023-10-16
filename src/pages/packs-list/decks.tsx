import { FC } from 'react'

import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

import s from './pack-list.module.scss'

import { Pagination } from '@/components/ui/pagination'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { TableCellDate } from '@/components/ui/table/table-cell-date.tsx'
import { TableCellWithButtons } from '@/components/ui/table/table-cell-with-buttons.tsx'
import { useMeQuery } from '@/services/auth/auth.ts'
import { cardsSlice } from '@/services/cards/cards.slice.ts'
import { useGetDecksQuery } from '@/services/decks/decks.ts'
import { RootState } from '@/services/store.ts'
import { Arrow } from '@/svg/arrow.tsx'
import {Typography} from "@/components";

type Props = {
  variant?: 'myPacks' | 'allPacks'
}

export const Decks: FC<Props> = ({ variant }) => {
  const { data: { id: authorId } = {} } = useMeQuery()

  const searchByName = useSelector<RootState, string>(state => state.decksSlice.searchByName)
  const minCardsCount = useSelector<RootState, number>(state => state.decksSlice.minCardsCount)
  const maxCardsCount = useSelector<RootState, number>(state => state.decksSlice.maxCardsCount)
  const itemsPerPage = useSelector<RootState, number>(state => state.decksSlice.itemsPerPage)
  const currentPage = useSelector<RootState, number>(state => state.decksSlice.currentPage)
  const dispatch = useDispatch()

  const decks = useGetDecksQuery({
    itemsPerPage,
    authorId: variant === 'myPacks' ? authorId : undefined,
    name: searchByName,
    minCardsCount,
    maxCardsCount,
    currentPage,
  })

  if (decks.data?.pagination.totalItems === 0) return <Typography variant={'h2'} className={s.emptyPack}>Can't find any pack of cards</Typography>

  const totalPages = decks.data?.pagination.totalPages

  if (decks.isLoading) return <div>...Loading</div>
  if (decks.error) return <div>ERROR!!!</div>
  const chooseDeckHandler = (name: string, id: string) => {
    dispatch(cardsSlice.actions.setUserId(id))
    dispatch(cardsSlice.actions.setNameCard(name))
  }

  return (
    <>
      <Table className={s.table}>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Cards</TableHead>
            <TableHead>
              <button className={s.buttonUpdated}>
                Last Updated
                <Arrow className={s.arrow} />
              </button>
            </TableHead>
            <TableHead>Created by</TableHead>
            <TableHead></TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {decks.data?.items?.map(deck => {
            return (
              <TableRow key={deck.id}>
                <TableCell
                  className={s.linkCard}
                  onClick={() => chooseDeckHandler(deck.name, deck.userId)}
                >
                  <Link to={`/cards/${deck.id}`}>{deck.name}</Link>
                </TableCell>
                <TableCell>{deck.cardsCount}</TableCell>
                <TableCellDate date={deck.updated} />
                {variant === 'myPacks' ? (
                  <TableCellDate date={deck.created} />
                ) : (
                  <TableCell>{deck.author.name}</TableCell>
                )}
                <TableCellWithButtons packId={deck.id} variant={variant} nameItem={deck.name} />
              </TableRow>
            )
          })}
        </TableBody>
      </Table>
      <section className={s.pagination}>
        <Pagination
          currentPage={currentPage}
          itemsPerPage={itemsPerPage}
          totalPages={totalPages}
          // totalItems={totalItems}
        />
      </section>
    </>
  )
}
