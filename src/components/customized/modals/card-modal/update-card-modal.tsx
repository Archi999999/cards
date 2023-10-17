import { FC, useEffect, useState } from 'react'

import { TextField } from '@/components'
import { Modal } from '@/components/ui/modal/modal.tsx'
import { useGetCardByIdQuery, useUpdateCardMutation } from '@/services/cards/cards.ts'

type Props = {
  setModal: (value: boolean) => void
  cardId: string
}

export const UpdateCardModal: FC<Props> = ({ setModal, cardId }) => {
  // const options = [
  //   { id: '', value: 'text' },
  //   { id: '', value: 'image' },
  // ]
  const { data: dataCards } = useGetCardByIdQuery({
    id: cardId,
  })

  const [question, setQuestion] = useState('')
  const [answer, setAnswer] = useState('')

  useEffect(() => {
    if (dataCards) {
      setQuestion(dataCards.question)
      setAnswer(dataCards.answer)
    }
  }, [dataCards])

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
