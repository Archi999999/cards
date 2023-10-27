import { FC, useState } from 'react'

import { TextField } from '@/components'
import { Modal } from '@/components/ui/modal/modal.tsx'
import { useUpdateCardMutation } from '@/services/cards/cards.ts'

type Props = {
  setModal: (value: boolean) => void
  cardId: string
  questionCard: string
  answerCard: string
}

export const UpdateCardModal: FC<Props> = ({ setModal, cardId, answerCard, questionCard }) => {
  const [question, setQuestion] = useState(questionCard)
  const [answer, setAnswer] = useState(answerCard)

  const [updateCard] = useUpdateCardMutation()
  const confirmUpdateCard = () => {
    updateCard({ id: cardId, answer: answer, question: question })
    setModal(false)
  }

  return (
    <Modal
      title={'Edit card'}
      setModal={setModal}
      confirmButtonName={'Save Changes'}
      onConfirm={confirmUpdateCard}
    >
      {/*<SelectSecond*/}
      {/*  defaultValue={options[0].value}*/}
      {/*  label={'Choose a question format'}*/}
      {/*  className={s.select}*/}
      {/*  options={options}*/}
      {/*/>*/}
      <TextField label={'Question'} value={question} onValueChange={setQuestion} />
      <TextField label={'Answer'} value={answer} onValueChange={setAnswer} />
    </Modal>
  )
}
