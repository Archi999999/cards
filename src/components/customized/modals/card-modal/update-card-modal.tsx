import { FC, useState } from 'react'

import { toast, ToastContainer } from 'react-toastify'

import { TextField } from '@/components'
import { AddImageField } from '@/components/customized/modals/card-modal/addImageField.tsx'
import { Modal } from '@/components/ui/modal/modal.tsx'
import { useUpdateCardMutation } from '@/services/cards/cards.ts'
import { RootObjectItems } from '@/services/cards/types.ts'

type Props = {
  setModal: (value: boolean) => void
  currentCard: RootObjectItems
}

export const UpdateCardModal: FC<Props> = ({ setModal, currentCard }) => {
  const [question, setQuestion] = useState(currentCard.question)
  const [answer, setAnswer] = useState(currentCard.answer)
  const [answerImg, setAnswerImg] = useState<Blob | null | string>(currentCard.answerImg)
  const [questionImg, setQuestionImg] = useState<Blob | null | string>(currentCard.questionImg)

  const [updateCard] = useUpdateCardMutation()
  const confirmUpdateCard = () => {
    const formData = new FormData()

    formData.append('question', question)
    formData.append('answer', answer)
    if (answerImg && typeof answerImg !== 'string') {
      formData.append('answerImg', answerImg)
    }
    if (questionImg && typeof questionImg !== 'string') {
      formData.append('questionImg', questionImg)
    }

    updateCard({ packId: currentCard.id, data: formData })
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
        <AddImageField type={'Question'} setImageToLearnPage={setQuestionImg} image={questionImg} />
        <TextField label={'Answer'} value={answer} onValueChange={setAnswer} />
        <AddImageField type={'Answer'} setImageToLearnPage={setAnswerImg} image={answerImg} />
      </Modal>
    </>
  )
}
