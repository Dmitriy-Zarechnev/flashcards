import { useSearchParams } from 'react-router-dom'

export const useSuperPagination = (itemsPerPageVar: number[]) => {
  const [searchParams, setSearchParams] = useSearchParams()

  const currentPage = searchParams.get('currentPage') ?? '1'
  const optionsItemsPerPage = itemsPerPageVar
  const itemsPerPage = searchParams.get('itemsPerPage') ?? `${optionsItemsPerPage[0]}`

  function handleCurrentPage(value: number) {
    if (value) {
      searchParams.set('currentPage', value.toString())
    } else {
      searchParams.delete('currentPage')
    }
    setSearchParams(searchParams)
  }

  function handlePerPage(value: number) {
    if (value) {
      searchParams.set('itemsPerPage', value.toString())
      searchParams.set('currentPage', '1')
    } else {
      searchParams.delete('itemsPerPage')
    }
    setSearchParams(searchParams)
  }

  return {
    currentPage,
    handleCurrentPage,
    handlePerPage,
    itemsPerPage,
    optionsItemsPerPage,
    searchParams,
    setSearchParams,
  }
}
