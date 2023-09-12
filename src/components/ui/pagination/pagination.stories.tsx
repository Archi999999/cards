import { Pagination } from './pagination'

export default {
  title: 'Components/Pagination',
  component: Pagination,
}

export const Default = () => <Pagination currentPage={1} itemsPerPage={10} totalPages={55} />
