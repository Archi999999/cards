import { useState } from 'react'

import { PackModal } from '@/components/customized/modals/pack-modal/pack-modal.tsx'
import { useCreateDeckMutation } from '@/services/decks/decks.ts'

type Props = {
  setModal: (value: boolean) => void
}

export const CreatePackModal: React.FC<Props> = ({ setModal }) => {
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
    setModal(false)
  }

  if (isLoading) return <div>...Loading</div>
  if (isError) return <div>ERROR!!!</div>

  return (
    <PackModal
      title={'Add New Pack'}
      setModal={setModal}
      confirmButtonName={'Add New Pack'}
      onConfirm={onConfirm}
      onNameChange={onNameChange}
      changePrivate={changePrivate}
      onPrivate={onPrivate}
    />
  )
}
