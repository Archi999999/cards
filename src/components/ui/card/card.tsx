import { ReactNode } from 'react'

import s from './card.module.scss'

type CardProps = {
  children: ReactNode
}

export const Card: React.FC<CardProps> = ({ children }) => {
  return <div className={s.card}>{children}</div>
}
