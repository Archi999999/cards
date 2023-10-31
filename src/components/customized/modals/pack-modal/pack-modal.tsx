import { FC } from 'react'

import { Checkbox, TextField } from '@/components'
import { Modal } from '@/components/ui/modal'

type Props = {
  title: string
  nameDeck?: string
  setModal: (value: boolean) => void
  confirmButtonName: string
  onConfirm: () => void
  onNameChange: (value: string) => void
  onPrivate: boolean
  changePrivate: () => void
}

export const PackModal: FC<Props> = ({
  title,
  nameDeck,
  setModal,
  confirmButtonName,
  onConfirm,
  onNameChange,
  onPrivate,
  changePrivate,
}) => {
  return (
    <Modal
      title={title}
      setModal={setModal}
      confirmButtonName={confirmButtonName}
      onConfirm={onConfirm}
    >
      <TextField label={'Name Pack'} onValueChange={onNameChange} value={nameDeck} />
      <Checkbox checked={onPrivate} onChange={changePrivate} label={'Private pack'} />
    </Modal>
  )
}
