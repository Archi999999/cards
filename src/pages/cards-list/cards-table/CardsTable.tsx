import { FC, useState } from 'react'

import { Button, Typography } from '@/components'
import { UpdateCardModal } from '@/components/customized/modals/card-modal/update-card-modal.tsx'
import { DeleteModal } from '@/components/customized/modals/delete-modal'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { TableCellDate } from '@/components/ui/table/table-cell-date.tsx'
import { CardsGrade } from '@/pages/cards-list/cards-table/cards-grade.tsx'
import s from '@/pages/packs-list/pack-list.module.scss'
import { RootObjectItems } from '@/services/cards/types.ts'
import { Arrow } from '@/svg/arrow.tsx'
import { Edit2Outline } from '@/svg/edit-2-outline.tsx'
import { Trash } from '@/svg/trash-outline.tsx'

type CardsTableProps = {
  data: RootObjectItems[] | undefined
  isMyCard: boolean | undefined
  createNewCardButton: () => void
}
export const CardsTable: FC<CardsTableProps> = ({ data, isMyCard, createNewCardButton }) => {
  const [openDeleteModal, setOpenDeleteModal] = useState(false)
  const [openUpdateModal, setOpenUpdateModal] = useState(false)

  console.log('CardsTable ' + isMyCard)

  if (data?.length === 0) {
    return (
      <div className={s.emptyDeck}>
        <Typography variant={'body_1'}>
          Can't find any pack of cards, but you can create card
        </Typography>
        {isMyCard && (
          <Button variant={'primary'} onClick={createNewCardButton}>
            Add New Card
          </Button>
        )}
      </div>
    )
  }

  return (
    <>
      <div>isMyCard= `${isMyCard}`</div>
      <Table className={s.table}>
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
            {isMyCard && <TableHead></TableHead>}
          </TableRow>
        </TableHeader>
        <TableBody>
          {data?.map(card => {
            return (
              <TableRow key={card.id}>
                <TableCell>{card.question}</TableCell>
                <TableCell>{card.answer}</TableCell>
                <TableCellDate date={card.updated} />
                <TableCell>
                  <CardsGrade grade={card.grade} />
                </TableCell>
                {isMyCard && (
                  <TableCell>
                    <div className={s.tablesButtons}>
                      <button className={s.button} onClick={() => setOpenUpdateModal(true)}>
                        <Edit2Outline color={'white'} />
                      </button>
                      {openUpdateModal && (
                        <UpdateCardModal setModal={setOpenUpdateModal} deckId={card.id} />
                      )}
                      <button className={s.button} onClick={() => setOpenDeleteModal(true)}>
                        <Trash />
                      </button>
                      {openDeleteModal && (
                        <DeleteModal
                          nameItem={'this card'}
                          title={'Delete Card'}
                          packId={card.id}
                          setModal={setOpenDeleteModal}
                        />
                      )}
                    </div>
                  </TableCell>
                )}
              </TableRow>
            )
          })}
        </TableBody>
      </Table>
    </>
  )
}
