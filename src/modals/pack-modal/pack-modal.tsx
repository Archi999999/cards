import { useState } from 'react'

import { Checkbox, TextField } from '@/components'
import { Modal } from '@/components/ui/modal'
import { useCreateDeckMutation } from '@/services/decks/decks.ts'

type Props = {
  title: string
  confirmButtonName: string
  setModal: (value: boolean) => void
}

export const PackModal: React.FC<Props> = ({ title, setModal, confirmButtonName }) => {
  const [onPrivate, setPrivate] = useState(false)
  const [name, setName] = useState('')
  const [createDeck, { isLoading, isError }] = useCreateDeckMutation()

  const changePrivate = () => {
    setPrivate(prev => !prev)
  }

  const onNameChange = (value: string) => {
    setName(value)
  }

  const onConfirm = () => {
    createDeck({ name, isPrivate: onPrivate })
  }

  if (isLoading) return <div>...Loading</div>
  if (isError) return <div>ERROR!!!</div>

  return (
    <Modal
      title={title}
      setModal={setModal}
      confirmButtonName={confirmButtonName}
      onConfirm={onConfirm}
    >
      <TextField label={'Name Pack'} onValueChange={onNameChange} />
      <Checkbox checked={onPrivate} onChange={changePrivate} label={'Private pack'} />
    </Modal>
  )
}
