import { FC, useState } from 'react'

import { useNavigate } from 'react-router-dom'

import { DeleteModal } from '@/components/customized/modals/delete-modal'
import { UpdatePackModal } from '@/components/customized/modals/pack-modal/update-pack-modal.tsx'
import { Dropdown, DropdownItemWithIcon, Separator } from '@/components/ui/dropdown/dropdown.tsx'
import { Edit2Outline } from '@/svg/edit-2-outline.tsx'
import { PlayCircleOutline } from '@/svg/play-circle-outline.tsx'
import { Trash } from '@/svg/trash-outline.tsx'
import { VerticalOutline } from '@/svg/vertical-outline.tsx'

type CardsDropProps = {
  deckId: string
  cardName: string
}
const CardsDrop: FC<CardsDropProps> = ({ deckId, cardName }) => {
  const navigate = useNavigate()
  const [modalDelete, setModalDelete] = useState(false)
  const [modalUpdate, setModalUpdate] = useState(false)

  return (
    <>
      <Dropdown trigger={<VerticalOutline />}>
        <DropdownItemWithIcon
          icon={<PlayCircleOutline />}
          text={'Learn'}
          onClick={() => {
            navigate(`/learn/${deckId}`)
          }}
        />
        <Separator />
        <DropdownItemWithIcon
          icon={<Edit2Outline color={'white'} />}
          text={'Edit'}
          onClick={() => setModalUpdate(true)}
        />
        <Separator />
        <DropdownItemWithIcon
          icon={<Trash />}
          text={'Delete'}
          onClick={() => setModalDelete(true)}
        />
      </Dropdown>
      {modalUpdate && <UpdatePackModal id={deckId} setModal={setModalUpdate} />}
      {modalDelete && (
        <DeleteModal
          setModal={setModalDelete}
          packId={deckId}
          title={'Delete Pack'}
          nameItem={cardName}
        />
      )}
    </>
  )
}

export default CardsDrop
