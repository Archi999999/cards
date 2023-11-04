import { FC, useState } from 'react'

import { toast, ToastContainer } from 'react-toastify'

import { TextField } from '@/components'
import { AddImageField } from '@/components/customized/modals/card-modal/addImageField.tsx'
import { Modal } from '@/components/ui/modal/modal.tsx'
import { useCreateCardMutation } from '@/services/cards/cards.ts'

type Props = {
  setModal: (value: boolean) => void
  deckId: string
}

export const CreateCardModal: FC<Props> = ({ setModal, deckId }) => {
  const [question, setQuestion] = useState('')
  const [answer, setAnswer] = useState('')
  const [questionImage, setQuestionImage] = useState('')
  const [answerImage, setAnswerImage] = useState('')
  const [createCard] = useCreateCardMutation()

  const confirmNewCard = () => {
    if (deckId) {
      createCard({
        id: deckId,
        answer: answer,
        question: question,
        questionImg: questionImage,
        answerImg: answerImage,
      })
        .unwrap()
        .then(() => {
          setModal(false)
        })
        .catch(() => {
          toast('question and answer must be longer than or equal to 3 characters"')
        })
    }
  }

  return (
    <>
      <ToastContainer autoClose={2000} position="top-center" limit={2} />
      <Modal
        title={'Add New Card'}
        setModal={setModal}
        confirmButtonName={'Add New Card'}
        onConfirm={confirmNewCard}
      >
        <TextField label={'Question'} onValueChange={setQuestion} />
        <AddImageField
          type={'Question'}
          image={questionImage}
          setImageToLearnPage={setQuestionImage}
        />
        <TextField label={'Answer'} onValueChange={setAnswer} />
        <AddImageField type={'Answer'} image={answerImage} setImageToLearnPage={setAnswerImage} />
      </Modal>
    </>
  )
}
