import { FC, useState } from 'react'

import { Button, Typography } from '@/components'
import { UpdateCardModal } from '@/components/customized/modals/card-modal/update-card-modal.tsx'
import { DeleteModal } from '@/components/customized/modals/delete-modal'
import {
  Table,
  TableBody,
  TableCell,
  TableCellWithItem,
  TableHead,
  TableHeader,
  TableHeadWithArrow,
  TableRow,
} from '@/components/ui/table'
import { TableCellDate } from '@/components/ui/table/table-cell-date.tsx'
import { CardsGrade } from '@/pages/cards-list/cards-table/cards-grade.tsx'
import { Sort } from '@/pages/cards-list/cards.tsx'
import { LoaderRotating } from '@/pages/loader/loader-rotating.tsx'
import s from '@/pages/packs-list/pack-list.module.scss'
import { RootObjectItems } from '@/services/cards/types.ts'
import { Edit2Outline } from '@/svg/edit-2-outline.tsx'
import { Trash } from '@/svg/trash-outline.tsx'

type CardsTableProps = {
  data: RootObjectItems[] | undefined
  isMyCard: boolean
  createNewCardButton: () => void
  sort: Sort
  setSort: (sort: Sort) => void
  isCardDadaLoading: boolean
}
export const CardsTable: FC<CardsTableProps> = ({
  data,
  isMyCard,
  createNewCardButton,
  setSort,
  sort,
  isCardDadaLoading,
}) => {
  const [openDeleteModal, setOpenDeleteModal] = useState(false)
  const [openUpdateModal, setOpenUpdateModal] = useState(false)
  const [cardId, setCardId] = useState('')
  const [question, setQuestion] = useState('')
  const [answer, setAnswer] = useState('')

  const clickOnButton = (id: string) => {
    setCardId(id)
    setOpenDeleteModal(true)
  }
  const clickOnUpdateButton = (cardId: string, question: string, answer: string) => {
    setCardId(cardId)
    setQuestion(question)
    setAnswer(answer)
    setOpenUpdateModal(true)
  }

  const handleSort = (key: string) => {
    if (sort && sort.key === key) {
      setSort({
        key,
        direction: sort.direction === 'asc' ? 'desc' : 'asc',
      })
    } else {
      setSort({
        key,
        direction: 'asc',
      })
    }
  }

  if (data?.length === 0) {
    return (
      <div className={s.emptyDeck}>
        <Typography variant={'body_1'}>
          {`Can't find any pack of cards, but you can create card`}
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
      {isCardDadaLoading && <LoaderRotating />}
      <Table className={s.tableCard}>
        <TableHeader>
          <TableRow>
            <TableHeadWithArrow
              onClick={() => handleSort('question')}
              sort={sort && sort.key === 'question' ? sort.direction : ''}
            >
              Question{' '}
            </TableHeadWithArrow>
            <TableHeadWithArrow
              onClick={() => handleSort('answer')}
              sort={sort && sort.key === 'answer' ? sort.direction : ''}
            >
              Answer
            </TableHeadWithArrow>
            <TableHeadWithArrow
              onClick={() => handleSort('updated')}
              sort={sort && sort.key === 'updated' ? sort.direction : ''}
            >
              Last Updated
            </TableHeadWithArrow>
            <TableHeadWithArrow
              onClick={() => handleSort('grade')}
              sort={sort && sort.key === 'grade' ? sort.direction : ''}
            >
              Grade
            </TableHeadWithArrow>
            {isMyCard && <TableHead></TableHead>}
          </TableRow>
        </TableHeader>
        <TableBody>
          {data?.map(card => {
            return (
              <TableRow key={card.id}>
                <TableCellWithItem item={card.questionImg}>{card.question}</TableCellWithItem>
                <TableCellWithItem item={card.answerImg}> {card.answer}</TableCellWithItem>
                <TableCellDate date={card.updated} />
                <TableCell>
                  <CardsGrade grade={card.grade} />
                </TableCell>
                {isMyCard && (
                  <TableCell>
                    <div className={s.tablesButtons}>
                      <button
                        className={s.button}
                        onClick={() => clickOnUpdateButton(card.id, card.question, card.answer)}
                      >
                        <Edit2Outline color={'white'} />
                      </button>
                      <button className={s.button} onClick={() => clickOnButton(card.id)}>
                        <Trash />
                      </button>
                    </div>
                  </TableCell>
                )}
              </TableRow>
            )
          })}
        </TableBody>
      </Table>
      {openDeleteModal && (
        <DeleteModal
          nameItem={'this card'}
          title={'Delete Card'}
          packId={cardId}
          setModal={setOpenDeleteModal}
        />
      )}
      {openUpdateModal && (
        <UpdateCardModal
          setModal={setOpenUpdateModal}
          cardId={cardId}
          answerCard={answer}
          questionCard={question}
        />
      )}
    </>
  )
}
