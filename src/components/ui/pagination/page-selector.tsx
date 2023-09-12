import { FC, useState } from 'react'

import { Button, Typography } from '@/components'
import s from '@/components/ui/pagination/pagination.module.scss'
import { SelectArrow } from '@/svg/selectArrow.tsx'

type Props = {
  currentPage: number
  totalPages: number
}

export const PageSelector: FC<Props> = ({ currentPage, totalPages }) => {
  const [page, setPage] = useState(currentPage)

  const onChangePage = (pageNumber: number) => {
    setPage(pageNumber)
  }

  const onClickLeft = () => {
    setPage(prev => prev - 1)
  }

  const onClickRight = () => {
    setPage(prev => prev + 1)
  }

  const leftNumber = page < 4 ? 2 : page - 2
  const rightNumber = page > totalPages - 3 ? totalPages : page + 3

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
          <SelectArrow className={s.leftArrow} />
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
          <SelectArrow className={s.rightArrow} />
        </Button>
      </li>
    </ul>
  )
}
