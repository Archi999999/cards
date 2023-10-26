import { FC, useState } from 'react'

import { PackModal } from '@/components/customized/modals/pack-modal/pack-modal.tsx'
import { useUpdateDeckMutation } from '@/services/decks/decks.ts'

type Props = {
  id: string
  nameDeck: string
  setModal: (value: boolean) => void
}

export const UpdatePackModal: FC<Props> = ({ id,nameDeck, setModal }) => {
  const [isPrivate, setPrivate] = useState(false)
  const [name, setName] = useState(nameDeck)
  const [updateDeck] = useUpdateDeckMutation()

  const changePrivate = () => {
    setPrivate(prev => !prev)
  }

  const onNameChange = (value: string) => {
    setName(value)
  }

  const onConfirm = () => {
    updateDeck({ name, isPrivate, id, cover: null })
    setModal(false)
  }

  return (
    <PackModal
      title={'Edit Pack'}
      setModal={setModal}
      confirmButtonName={'Save Changes'}
      onConfirm={onConfirm}
      onNameChange={onNameChange}
      changePrivate={changePrivate}
      onPrivate={isPrivate}
      nameDeck={name}
    />
  )
}
