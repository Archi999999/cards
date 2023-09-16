import { ComponentPropsWithoutRef, FC } from 'react'

import { Link } from 'react-router-dom'

import s from '@/components/ui/table/table.module.scss'
import { Edit2Outline } from '@/svg/edit-2-outline.tsx'
import { PlayCircleOutline } from '@/svg/play-circle-outline.tsx'
import { Trash } from '@/svg/trash-outline.tsx'

export const TableCellWithButtons: FC<ComponentPropsWithoutRef<'td'>> = ({
  className,
  ...props
}) => (
  <td className={`${className} ${s.cell} `} {...props}>
    <div className={s.buttonsBlock}>
      <Link to={'./#'} className={s.button}>
        <PlayCircleOutline />
      </Link>
      <button className={s.button}>
        <Edit2Outline color={'currentColor'} />
      </button>
      <button className={s.button}>
        <Trash />
      </button>
    </div>
  </td>
)
