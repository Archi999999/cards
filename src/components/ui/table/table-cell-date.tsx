import { ComponentPropsWithoutRef, FC } from 'react'

import { Typography } from '@/components'
import s from '@/components/ui/table/table.module.scss'

type Props = ComponentPropsWithoutRef<'td'> & {
  date: string
}

export const TableCellDate: FC<Props> = ({ className, date, ...props }) => {
  const formattedDate = (date: string) => date.replace(/^(\d{4})-(\d{2})-(\d{2}).*/, '$3.$2.$1')

  return (
    <td className={`${className} ${s.cell}`} {...props}>
      <Typography>{formattedDate(date)}</Typography>
    </td>
  )
}
