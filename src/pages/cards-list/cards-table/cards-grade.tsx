import { FC } from 'react'

import styles from './cards-grade.module.scss'

import { Star } from '@/svg/star.tsx'
import { FullStar } from '@/svg/StarFull.tsx'
type CardsGradeProps = {
  grade: number
}
export const CardsGrade: FC<CardsGradeProps> = ({ grade }) => {
  const rowStar1 = new Array(grade).fill(<FullStar />)
  const rowStar2 = new Array(5 - grade).fill(<Star />)
  const rowStar = [...rowStar1, ...rowStar2]

  return <div className={styles.stars}>{rowStar}</div>
}
