import { FC, useEffect, useState } from 'react'

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
  const [questionImage, setQuestionImage] = useState<Blob | null>(null)
  const [answerImage, setAnswerImage] = useState<Blob | null>(null)
  const [createCard] = useCreateCardMutation()

  const confirmNewCard = () => {
    if (deckId && question && answer) {
      const formData = new FormData()

      formData.append('answer', answer)
      formData.append('question', question)
      if (questionImage) {
        formData.append('questionImg', questionImage)
      }
      if (answerImage) {
        formData.append('answerImg', answerImage)
      }

      createCard({
        packId: deckId,
        data: formData,
      })
        .unwrap()
        .then(() => {
          setModal(false)
        })
        .catch(() => {
          toast.error('question and answer must be longer than or equal to 3 characters"')
        })
    } else {
      toast.error('Question and answer are required fields')
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
          setImageToLearnPage={setQuestionImage}
          image={questionImage}
        />
        <TextField label={'Answer'} onValueChange={setAnswer} />
        <AddImageField type={'Answer'} setImageToLearnPage={setAnswerImage} image={answerImage} />
      </Modal>
    </>
  )
}
