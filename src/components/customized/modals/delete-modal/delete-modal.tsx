import { Typography } from '@/components'
import { Modal } from '@/components/ui/modal/modal.tsx'
import { useDeleteDeckMutation } from '@/services/decks/decks.ts'

type Props = {
  nameItem: string
  title: 'Delete Pack' | 'Delete Card'
  packId: string
  setModal: (value: boolean) => void
}

export const DeleteModal: React.FC<Props> = ({ title, setModal, packId, nameItem }) => {
  //нужно будет добавить удаление карточки и колоды
  const [deleteDeck] = useDeleteDeckMutation()
  const deleteCard = () => {}

  const onConfirm = () => {
    if (title === 'Delete Pack') {
      deleteDeck({ id: packId ?? '' })
    } else {
      deleteCard()
    }
    setModal(false)
  }

  return (
    <Modal title={title} setModal={setModal} confirmButtonName={title} onConfirm={onConfirm}>
      <Typography variant={'body_1'}>
        Do you really want to remove <Typography variant={'subtitle_1'}>{nameItem}?</Typography>
        <br /> All cards will be deleted.
      </Typography>
    </Modal>
  )
}
