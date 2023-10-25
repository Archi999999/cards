import { useState } from 'react'

import { Link, useParams } from 'react-router-dom'

import styles from './learn-pack.module.scss'

import { Button, Typography } from '@/components'
import { Card } from '@/components/ui/card/card.tsx'
import ShowAnswer from '@/pages/learn-pack/show-answer.tsx'
import { LoaderRotating } from '@/pages/loader/loader-rotating.tsx'
import { useGetRandomCardQuery, useUpdateGradeCardMutation } from '@/services/cards/cards.ts'
import { useGetDeckByIdQuery } from '@/services/decks/decks.ts'
import { ArrowBack } from '@/svg/arrow-back-outline.tsx'

export const LearnPack = () => {
  const [showAnswer, setShowAnswer] = useState(false)
  const { deckId } = useParams<{ deckId: string }>()
  const { data } = useGetDeckByIdQuery({
    id: deckId!,
  })

  const { data: dataRandomCard, isLoading } = useGetRandomCardQuery({
    idDeck: deckId || '',
  })

  const [updateGradeCard] = useUpdateGradeCardMutation()

  const updateGradeCardHandler = (grade: number) => {
    updateGradeCard({ grade, cardId: data ? data.id : '', idDeck: deckId || '' })
    setShowAnswer(false)
  }

  if (data?.cardsCount === 0) {
    return (
      <div className={styles.emptyPage}>
        <Typography variant={'large'}>There are no cards in the deck.</Typography>
        <Link to={'/'}> leave page</Link>
      </div>
    )
  }
  if (isLoading) return <LoaderRotating />

  return (
    <div className={styles.wrapper}>
      <Link className={styles.linkBack} to={`/`}>
        <ArrowBack />
        <Typography variant={'body_2'}> Back to Packs List</Typography>
      </Link>
      <Card>
        <Typography variant={'large'}>Learn “{data ? data.name : ''}”</Typography>
        <Typography className={styles.cardQuestion} variant={'subtitle_1'}>
          Question:
        </Typography>
        <Typography variant={'h1'} as={'div'}>
          {dataRandomCard && dataRandomCard.question}
        </Typography>
        <Typography className={styles.cardEffortQuantity} variant={'body_2'}>
          Количество попыток ответов на вопрос: {dataRandomCard && dataRandomCard.shots}
        </Typography>
        <Button
          variant={'primary'}
          onClick={() => {
            setShowAnswer(true)
          }}
        >
          Show Answer
        </Button>
        {showAnswer && (
          <ShowAnswer
            setNewQuestion={updateGradeCardHandler}
            answer={dataRandomCard ? dataRandomCard.answer : ''}
          />
        )}
      </Card>
    </div>
  )
}
