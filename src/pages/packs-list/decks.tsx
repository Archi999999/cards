import { FC } from 'react'

import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

import s from './pack-list.module.scss'

import { Typography } from '@/components'
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
import { LoaderRotating } from '@/pages/loader/loader-rotating.tsx'
import { useMeQuery } from '@/services/auth/auth.ts'
import { useGetDecksQuery } from '@/services/decks/decks.ts'
import { RootState } from '@/services/store.ts'
import { Arrow } from '@/svg/arrow.tsx'

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

  const decks = useGetDecksQuery({
    itemsPerPage,
    authorId: variant === 'myPacks' ? authorId : undefined,
    name: searchByName,
    minCardsCount,
    maxCardsCount,
    currentPage,
  })

  if (decks.data?.pagination.totalItems === 0)
    return (
      <Typography variant={'h2'} className={s.emptyPack}>
        {`Can't find any pack of cards`}
      </Typography>
    )

  const totalPages = decks.data?.pagination.totalPages

  if (decks.isLoading) return <LoaderRotating />
  if (decks.error) return <div>ERROR!!!</div>

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
                <TableCell className={s.linkCard}>
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
        <Pagination currentPage={currentPage} itemsPerPage={itemsPerPage} totalPages={totalPages} />
      </section>
    </>
  )
}
