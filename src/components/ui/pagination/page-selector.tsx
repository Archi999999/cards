import { FC } from 'react'

import { Button, Typography } from '@/components'
import s from '@/components/ui/pagination/pagination.module.scss'
import { Arrow } from '@/svg/arrow.tsx'

type Props = {
  currentPage: number
  totalPages: number
  callBack?: (pageNumber: number) => void
}

export const PageSelector: FC<Props> = ({ currentPage: page, totalPages, callBack }) => {
  const onChangePage = (pageNumber: number) => {
    callBack && callBack(pageNumber)
  }

  const onClickLeft = () => {
    callBack && callBack(page - 1)
  }

  const onClickRight = () => {
    callBack && callBack(page + 1)
  }

  const leftNumber = page < 4 ? 2 : page - 2
  const rightNumber = page > totalPages - 3 ? totalPages : page + 3

  if (totalPages < 7) {
    return (
      <ul className={s.pageSelector}>
        <li key={'arrowLeft'}>
          <Button className={s.leftButton} onClick={onClickLeft} disabled={page === 1}>
            <Arrow className={s.leftArrow} />
          </Button>
        </li>
        {Array.from({ length: totalPages }, (_, i) => (
          <li key={i + 1}>
            <button
              onClick={() => onChangePage(i + 1)}
              className={`${s.pageButton} ${page === i + 1 && s.pageButtonActive}`}
            >
              {i + 1}
            </button>
          </li>
        ))}
        <li key={'arrowRight'}>
          <Button className={s.rightButton} onClick={onClickRight} disabled={page === totalPages}>
            <Arrow className={s.rightArrow} />
          </Button>
        </li>
      </ul>
    )
  }

  let totalPageNumbers = []

  for (let i = leftNumber; i < rightNumber; i++) {
    totalPageNumbers.push(i)
  }

  while (totalPageNumbers.length < 5) {
    if (totalPageNumbers[0] !== 2) {
      totalPageNumbers.unshift(totalPageNumbers[0] - 1)
    } else {
      totalPageNumbers.push(totalPageNumbers[totalPageNumbers.length - 1] + 1)
    }
  }

  const pageNumbers = totalPageNumbers.map((pageNumber, index) => {
    const className = `${s.pageButton} ${pageNumber === page && s.pageButtonActive}`

    if ((index === 0 && pageNumber !== 2) || (index === 4 && pageNumber !== totalPages - 1)) {
      return (
        <li key={index}>
          <div className={s.div}>...</div>
        </li>
      )
    }

    return (
      <li key={index}>
        <button className={className} onClick={() => onChangePage(pageNumber)}>
          <Typography>{pageNumber}</Typography>
        </button>
      </li>
    )
  })

  return (
    <ul className={s.pageSelector}>
      <li key={'arrowLeft'}>
        <Button className={s.leftButton} onClick={onClickLeft} disabled={page === 1}>
          <Arrow className={s.leftArrow} />
        </Button>
      </li>
      <li key={1}>
        <button
          className={`${s.pageButton} ${page === 1 && s.pageButtonActive}`}
          onClick={() => onChangePage(1)}
        >
          <Typography>1</Typography>
        </button>
      </li>
      {pageNumbers}
      <li key={'last'}>
        <button
          className={`${s.pageButton} ${page === totalPages && s.pageButtonActive}`}
          onClick={() => onChangePage(totalPages)}
        >
          <Typography>{totalPages}</Typography>
        </button>
      </li>
      <li key={'arrowRight'}>
        <Button className={s.rightButton} onClick={onClickRight} disabled={page === totalPages}>
          <Arrow className={s.rightArrow} />
        </Button>
      </li>
    </ul>
  )
}
