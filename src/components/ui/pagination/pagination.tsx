import { useDispatch } from 'react-redux'

import s from './pagination.module.scss'

import { PageSelector } from '@/components/ui/pagination/page-selector.tsx'
import { SelectSecond } from '@/components/ui/select/selectSecond.tsx'
import { decksSlice } from '@/services/decks/decks.slice.ts'
// import { useGetDecksQuery } from '@/services/decks/decks.ts'

type Props = {
  currentPage?: number
  itemsPerPage?: number
  totalPages?: number
  totalItems?: number
}

export const Pagination: React.FC<Props> = ({
  currentPage = 1,
  itemsPerPage,
  totalPages = 1,
  // totalItems,
}) => {
  const dispatch = useDispatch()
  const options = [
    { id: '10', value: '10' },
    { id: '20', value: '20' },
    { id: '30', value: '30' },
  ]

  if (currentPage > totalPages) {
    dispatch(decksSlice.actions.setCurrentPage(totalPages))
  }

  const onChangePerPage = (value: string) => {
    dispatch(decksSlice.actions.setItemPerPage(+value))
  }
  const onChangeCurrentPage = (page: number) => {
    dispatch(decksSlice.actions.setCurrentPage(page))
  }

  return (
    <nav className={s.pagination}>
      <PageSelector
        totalPages={totalPages}
        currentPage={currentPage}
        callBack={onChangeCurrentPage}
      />
      <SelectSecond
        label={'Показать'}
        postLabel={'на странице'}
        options={options}
        className={s.select}
        value={itemsPerPage?.toString()}
        width={'69px'}
        onValueChange={onChangePerPage}
      />
    </nav>
  )
}
