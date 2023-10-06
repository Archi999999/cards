import { ComponentPropsWithoutRef, FC } from 'react'

import { Link } from 'react-router-dom'

import s from '@/components/ui/table/table.module.scss'
import { useDeleteDeckMutation } from '@/services/decks/decks.ts'
import { Edit2Outline } from '@/svg/edit-2-outline.tsx'
import { PlayCircleOutline } from '@/svg/play-circle-outline.tsx'
import { Trash } from '@/svg/trash-outline.tsx'

type Props = {
  packId: string
  variant?: 'myPacks' | 'allPacks'
}

export const TableCellWithButtons: FC<ComponentPropsWithoutRef<'td'> & Props> = ({
  className,
  packId,
  variant,
  ...props
}) => {
  const [deleteDeck] = useDeleteDeckMutation()

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
            <button className={s.button} onClick={() => deleteDeck({ id: packId ?? '' })}>
              <Trash />
            </button>
          </>
        )}
        {variant === 'allPacks' && <span>Learn</span>}
      </div>
    </td>
  )
}
