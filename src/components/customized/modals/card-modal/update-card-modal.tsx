import { useState } from 'react'

import { TextField } from '@/components'
import { Modal } from '@/components/ui/modal/modal.tsx'
import { useCreateCardMutation } from '@/services/cards/cards.ts'

type Props = {
  setModal: (value: boolean) => void
  deckId: string | undefined
}

export const UpdateCardModal: React.FC<Props> = ({ setModal, deckId }) => {
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
      title={'Edit card'}
      setModal={setModal}
      confirmButtonName={'Save Changes'}
      onConfirm={confirmNewCard}
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
