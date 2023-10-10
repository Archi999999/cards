import { FC, useState } from 'react'

import { useSelector } from 'react-redux'

import s from './pack-list.module.scss'

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
import { useGetDecksQuery } from '@/services/decks/decks.ts'
import { RootState } from '@/services/store.ts'
import { Arrow } from '@/svg/arrow.tsx'

type Props = {
  variant?: 'myPacks' | 'allPacks'
  perPage?: number
}

export const Decks: FC<Props> = ({ variant, perPage = 10 }) => {
  const { data: { id: authorId } = {} } = useMeQuery()

  const [
    itemsPerPage,
    // setItemsPerPage
  ] = useState(perPage)
  const searchByName = useSelector<RootState, string>(state => state.decksSlice.searchByName)
  const minCardsCount = useSelector<RootState, number>(state => state.decksSlice.minCardsCount)
  const maxCardsCount = useSelector<RootState, number>(state => state.decksSlice.maxCardsCount)

  const decks = useGetDecksQuery({
    itemsPerPage,
    authorId: variant === 'myPacks' ? authorId : undefined,
    name: searchByName,
    minCardsCount,
    maxCardsCount,
  })

  if (decks.isLoading) return <div>...Loading</div>
  if (decks.error) return <div>ERROR!!!</div>

  return (
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
              <TableCell>{deck.name}</TableCell>
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
  )
}
