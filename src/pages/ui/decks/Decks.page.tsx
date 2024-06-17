import { useSuperPagination } from '@/pages/hooks/useSuperPagination'
import { useSuperDecksSearch } from '@/pages/ui/decks/hooks/useSuperDecksSearch'
import { useSuperDecksSort } from '@/pages/ui/decks/hooks/useSuperDecksSort'
import { useSuperSlider } from '@/pages/ui/decks/hooks/useSuperSlider'
import { useSuperTabs } from '@/pages/ui/decks/hooks/useSuperTabs'
import {
  useDeleteDeckMutation,
  useGetDeckMinMaxCardsQuery,
  useGetDecksQuery,
  useMeQuery,
  useUpdateDeckMutation,
} from '@/services'
import { Button, DeckControlBlock, DecksTable, ListHeader, Page, Pagination } from '@/shared'

export const DecksPage = () => {
  // ----- Хук для работы пагинации и с url-ом -----
  const {
    currentPage,
    handleCurrentPage,
    handlePerPage,
    itemsPerPage,
    optionsItemsPerPage,
    searchParams,
    setSearchParams,
  } = useSuperPagination([5, 10, 15, 20])

  // ----- Хук для работы с поиском по названию -----
  const { search, searchInputOnChangeHandler, searchInputResetHandler } = useSuperDecksSearch(
    searchParams,
    setSearchParams
  )

  // ----- Хук для работы со слайдером -----
  const {
    defaultSliderValues,
    minMaxCardsData,
    setSliderValues,
    sliderValueChangeHandler,
    sliderValues,
  } = useSuperSlider()

  // ----- Хук для работы с tabs -----
  const { setTabValue, tabValue, tabValueChangeHandler, tabsList } = useSuperTabs()

  // ----- Хук для работы с сортировкой -----
  const { setTableSort, sortTableOnClickHandler, tableSort } = useSuperDecksSort()

  // const { data: me } = useMeQuery()
  //
  // const authorId = tabValue === tabsList[1].value ? me?.id : undefined

  // ----- Блок работы с запросом на сервер и получения данных -----
  const { data, error, isLoading } = useGetDecksQuery({
    //authorId,
    currentPage: +currentPage,
    itemsPerPage: +itemsPerPage,
    maxCardsCount: sliderValues[1],
    minCardsCount: sliderValues[0],
    name: search,
    orderBy: tableSort,
  })

  const [deleteDeck] = useDeleteDeckMutation()
  const [updateDeck] = useUpdateDeckMutation()

  const updateDeckHandler = (id: string) => {
    updateDeck({ id, isPrivate: false, name: 'hello' })
  }
  const deleteDeckHandler = (id: string) => {
    deleteDeck({ id })
  }

  const playDeckHandler = () => {}

  // ----- Проверка по id и изменение отображения компоненты -----
  const userId = 6 === 6

  // ----- Очистили filter при нажатии на кнопку -----
  const clearFilterHandler = () => {
    setSliderValues(defaultSliderValues)
    searchInputResetHandler()
    setTabValue(tabsList[1].value)
    setTableSort('updated-desc')
  }

  // ----- Показывать Loader -----
  if (isLoading) {
    return <h1>Loading...</h1>
  }

  // ----- Показывать страницу при пустых данных -----
  if (data?.items.length === 0) {
    return (
      <>
        <h1>Empty😣</h1>
        <Button onClick={clearFilterHandler}>Reload</Button>
      </>
    )
  }

  // ----- Показывать страницу с ошибкой -----
  if (error) {
    return <div>Error: {JSON.stringify(error)}</div>
  }

  return (
    <Page>
      <ListHeader buttonTitle={'Add new deck'} title={'Decks List'} />
      <DeckControlBlock
        clearFilterOnClick={clearFilterHandler}
        minMaxCardsData={minMaxCardsData}
        searchInputOnChange={searchInputOnChangeHandler}
        searchInputReset={searchInputResetHandler}
        searchInputValue={search}
        sliderValueChange={sliderValueChangeHandler}
        sliderValues={sliderValues}
        tabValue={tabValue}
        tabValueChange={tabValueChangeHandler}
        tabsData={tabsList}
      />
      <DecksTable
        clickDeleteDeck={deleteDeckHandler}
        clickUpdateDeck={updateDeckHandler}
        decks={data?.items}
        playFunction={playDeckHandler}
        sortTableOnClick={sortTableOnClickHandler}
        tableSort={tableSort}
        userId={userId}
      />
      <Pagination
        count={data?.pagination.totalPages || 0}
        onChange={handleCurrentPage}
        onPerPageChange={handlePerPage}
        page={+currentPage}
        perPage={+itemsPerPage}
        perPageOptions={optionsItemsPerPage}
      />
    </Page>
  )
}
