export const useSuperSearch = (
  searchParams: URLSearchParams,
  setSearchParams: (newSearchParams: URLSearchParams) => void
) => {
  // Создали переменную поиска
  const search = searchParams.get('search') ?? ''

  // Реагируем на изменение value в input
  function searchInputOnChangeHandler(value: string) {
    if (value.length) {
      searchParams.set('search', value)
    } else {
      searchParams.delete('search')
    }
    setSearchParams(searchParams)
  }

  // Кнопка - крестик в input для очистки запроса
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
