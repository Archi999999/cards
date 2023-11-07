import { FC } from 'react'

import { Checkbox, TextField } from '@/components'
import { AddImageField } from '@/components/customized/modals/card-modal/addImageField.tsx'
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
  image: any
  setImage: (image: any) => void
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
  image,
  setImage,
}) => {
  return (
    <Modal
      title={title}
      setModal={setModal}
      confirmButtonName={confirmButtonName}
      onConfirm={onConfirm}
    >
      <TextField label={'Name Pack'} onValueChange={onNameChange} value={nameDeck} />
      <AddImageField image={image} setImageToLearnPage={setImage} />
      <Checkbox checked={onPrivate} onChange={changePrivate} label={'Private pack'} />
    </Modal>
  )
}
