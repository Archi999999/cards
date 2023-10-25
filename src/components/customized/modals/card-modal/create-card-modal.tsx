import { useState } from 'react'

import { toast, ToastContainer } from 'react-toastify'

import { TextField } from '@/components'
import { Modal } from '@/components/ui/modal/modal.tsx'
import { useCreateCardMutation } from '@/services/cards/cards.ts'

type Props = {
  setModal: (value: boolean) => void
  deckId: string
}

export const CreateCardModal: React.FC<Props> = ({ setModal, deckId }) => {
  // const options = [
  //   { id: '', value: 'text' },
  //   { id: '', value: 'image' },
  // ]
  const [question, setQuestion] = useState('')
  const [answer, setAnswer] = useState('')
  const [createCard] = useCreateCardMutation()
  let questionError = ''
  const confirmNewCard = () => {
    if (deckId) {
      createCard({ id: deckId, answer: answer, question: question })
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
        {/*<SelectSecond*/}
        {/*  defaultValue={options[0].value}*/}
        {/*  label={'Choose a question format'}*/}
        {/*  className={s.select}*/}
        {/*  options={options}*/}
        {/*/>*/}
        <TextField label={'Question'} onValueChange={setQuestion} error={questionError} />
        <TextField label={'Answer'} onValueChange={setAnswer} />
      </Modal>
    </>
  )
}
