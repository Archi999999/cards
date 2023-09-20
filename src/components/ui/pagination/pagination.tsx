import s from './pagination.module.scss'

import { PageSelector } from '@/components/ui/pagination/page-selector.tsx'
import { SelectSecond } from '@/components/ui/select/selectSecond.tsx'

type Props = {
  currentPage: number
  itemsPerPage: number
  totalPages: number
  totalItems?: number
}

export const Pagination: React.FC<Props> = ({
  currentPage,
  // itemsPerPage,
  totalPages,
  // totalItems,
}) => {
  // useEffect(() => {}, [currentPage])

  const options = [
    { id: '10', value: '10' },
    { id: '20', value: '20' },
    { id: '30', value: '30' },
    { id: '50', value: '50' },
    { id: '100', value: '100' },
  ]

  return (
    <nav className={s.pagination}>
      <PageSelector totalPages={totalPages} currentPage={currentPage} />
      <SelectSecond
        label={'Показать'}
        postLabel={'на странице'}
        options={options}
        className={s.select}
        // value={itemsPerPage.toString()}
        width={'69px'}
      />
    </nav>
  )
}
