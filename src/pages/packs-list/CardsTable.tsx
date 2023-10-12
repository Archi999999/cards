import { Table, TableBody, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import s from '@/pages/packs-list/pack-list.module.scss'
import { Arrow } from '@/svg/arrow.tsx'

export const CardsTable = () => {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Question</TableHead>
          <TableHead>Answer</TableHead>
          <TableHead>
            {' '}
            <button className={s.buttonUpdated}>
              Last Updated
              <Arrow className={s.arrow} />
            </button>
          </TableHead>
          <TableHead>Grade</TableHead>
          <TableHead></TableHead>
        </TableRow>
      </TableHeader>
      <TableBody></TableBody>
    </Table>
  )
}
