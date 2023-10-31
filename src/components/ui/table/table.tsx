import { ComponentPropsWithoutRef, FC } from 'react'

import s from './table.module.scss'

import { Typography } from '@/components'
import { Arrow } from '@/svg/arrow.tsx'

export const Table: FC<ComponentPropsWithoutRef<'table'>> = ({ className, ...props }) => (
  <table className={`${className} ${s.table}`} {...props} />
)

export const TableHeader: FC<ComponentPropsWithoutRef<'thead'>> = ({ className, ...props }) => (
  <thead className={`${className} ${s.header}`} {...props} />
)

export const TableHead: FC<ComponentPropsWithoutRef<'th'>> = ({ className, ...props }) => (
  <th className={`${className} ${s.head}`} {...props}>
    <Typography as={'h2'} variant={'subtitle_2'}>
      {props.children}
    </Typography>
  </th>
)

interface TableHeadWithArrowProps extends ComponentPropsWithoutRef<'th'> {
  sort?: 'asc' | 'desc' | ''
}
export const TableHeadWithArrow: FC<TableHeadWithArrowProps> = ({ className, sort, ...props }) => {
  return (
    <th className={`${className} ${s.head}`} {...props}>
      <button className={s.headSort}>
        {props.children}
        {sort === 'asc' && <Arrow />}
        {sort === 'desc' && <Arrow style={{ transform: 'rotate(180deg)' }} />}
      </button>
    </th>
  )
}
export const TableBody: FC<ComponentPropsWithoutRef<'tbody'>> = ({ className, ...props }) => (
  <tbody className={`${className} ${s.body}`} {...props} />
)

export const TableRow: FC<ComponentPropsWithoutRef<'tr'>> = ({ className, ...props }) => (
  <tr className={`${className} ${s.row}`} {...props} />
)

export const TableCell: FC<ComponentPropsWithoutRef<'td'>> = ({ className, ...props }) => (
  <td className={`${className} ${s.cell}`} {...props}>
    <Typography>{props.children}</Typography>
  </td>
)

export const TableFooter: FC<ComponentPropsWithoutRef<'tfoot'>> = ({ className, ...props }) => (
  <tfoot className={`${className} ${s.footer}`} {...props} />
)
