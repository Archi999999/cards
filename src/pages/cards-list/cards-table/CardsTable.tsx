import { FC } from 'react'

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { CardsGrade } from '@/pages/cards-list/cards-table/cards-grade.tsx'
import s from '@/pages/packs-list/pack-list.module.scss'
import { RootObjectItems } from '@/services/cards/types.ts'
import { Arrow } from '@/svg/arrow.tsx'

type CardsTableProps = {
  data: RootObjectItems[]
}
export const CardsTable: FC<CardsTableProps> = ({ data }) => {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Question</TableHead>
          <TableHead>Answer</TableHead>
          <TableHead>
            <button className={s.buttonUpdated}>
              Last Updated
              <Arrow className={s.arrow} />
            </button>
          </TableHead>
          <TableHead>Grade</TableHead>
          <TableHead></TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {data?.map(card => {
          return (
            <TableRow key={card.id}>
              <TableCell>{card.question}</TableCell>
              <TableCell>{card.answer}</TableCell>
              <TableCell>{card.updated}</TableCell>
              <TableCell>
                <CardsGrade grade={card.grade} />
              </TableCell>
            </TableRow>
          )
        })}
      </TableBody>
    </Table>
  )
}
