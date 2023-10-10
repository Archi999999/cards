import { ComponentPropsWithoutRef, FC, useState } from 'react'

import { Link } from 'react-router-dom'

import { DeleteModal } from '@/components/customized/modals/delete-modal/delete-modal.tsx'
import s from '@/components/ui/table/table.module.scss'
import { Edit2Outline } from '@/svg/edit-2-outline.tsx'
import { PlayCircleOutline } from '@/svg/play-circle-outline.tsx'
import { Trash } from '@/svg/trash-outline.tsx'

type Props = {
  nameItem: string
  packId: string
  variant?: 'myPacks' | 'allPacks'
}

export const TableCellWithButtons: FC<ComponentPropsWithoutRef<'td'> & Props> = ({
  className,
  nameItem,
  packId,
  variant,
  ...props
}) => {
  const [modalDelete, setModalDelete] = useState(false)

  return (
    <td className={`${className} ${s.cell} `} {...props}>
      <div className={s.buttonsBlock}>
        <Link to={'./#'} className={s.button}>
          <PlayCircleOutline />
        </Link>
        {variant === 'myPacks' && (
          <>
            <button className={s.button}>
              <Edit2Outline color={'currentColor'} />
            </button>
            <button className={s.button} onClick={() => setModalDelete(true)}>
              <Trash />
            </button>
          </>
        )}
        {variant === 'allPacks' && <span>Learn</span>}
      </div>
      {modalDelete && (
        <DeleteModal
          title={'Delete Pack'}
          nameItem={nameItem}
          setModal={setModalDelete}
          packId={packId}
        />
      )}
    </td>
  )
}
