import { FC, useState } from 'react'

import { toast, ToastContainer } from 'react-toastify'

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
      .unwrap()
      .then(() => {
        setModal(false)
      })
      .catch(() => {
        toast('question and answer must be longer than or equal to 3 characters"')
      })
  }

  return (
    <>
      <ToastContainer autoClose={2000} position="top-center" limit={2} />
      <Modal
        title={'Edit card'}
        setModal={setModal}
        confirmButtonName={'Save Changes'}
        onConfirm={confirmUpdateCard}
      >
        <TextField label={'Question'} value={question} onValueChange={setQuestion} />
        <TextField label={'Answer'} value={answer} onValueChange={setAnswer} />
      </Modal>
    </>
  )
}
