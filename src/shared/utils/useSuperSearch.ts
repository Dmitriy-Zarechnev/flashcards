export const useSuperSearch = (
  searchParams: URLSearchParams,
  setSearchParams: (newSearchParams: URLSearchParams) => void
) => {
  const search = searchParams.get('search') ?? ''

  function searchInputOnChangeHandler(value: string) {
    if (value.length) {
      searchParams.set('search', value)
    } else {
      searchParams.delete('search')
    }
    setSearchParams(searchParams)
  }

  const searchInputResetHandler = () => {
    searchParams.delete('search')
    setSearchParams(searchParams)
  }

  return {
    search,
    searchInputOnChangeHandler,
    searchInputResetHandler,
  }
}
