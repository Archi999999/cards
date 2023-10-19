import { useState } from 'react'

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
  const confirmNewCard = () => {
    createCard({ id: deckId, answer: answer, question: question })
    setModal(false)
  }

  return (
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
      <TextField label={'Question'} onValueChange={setQuestion} />
      <TextField label={'Answer'} onValueChange={setAnswer} />
    </Modal>
  )
}
