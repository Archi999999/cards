import { useState } from 'react'

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
import { useGetDecksQuery } from '@/services/decks/decks.ts'
import { Arrow } from '@/svg/arrow.tsx'

export const Decks = () => {
  const [
    itemsPerPage,
    //  setItemsPerPage,
  ] = useState(10)
  const decks = useGetDecksQuery({
    itemsPerPage,
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
              <TableCell>{deck.author.name}</TableCell>
              <TableCellWithButtons id={deck.id} />
            </TableRow>
          )
        })}
      </TableBody>
    </Table>
  )
}
