import { useSuperPagination } from '@/pages/hooks/useSuperPagination'
import { useSuperDecksSearch } from '@/pages/ui/decks/hooks/useSuperDecksSearch'
import { useSuperDecksSort } from '@/pages/ui/decks/hooks/useSuperDecksSort'
import { useSuperSlider } from '@/pages/ui/decks/hooks/useSuperSlider'
import { useSuperTabs } from '@/pages/ui/decks/hooks/useSuperTabs'
import {
  useDeleteDeckMutation,
  useGetDecksQuery,
  useUpdateDeckMutation,
} from '@/services/decks.service'
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
  const { setSliderValues, sliderMaxCardsCount, sliderMinCardsCount, sliderValueChangeHandler } =
    useSuperSlider()

  // ----- Хук для работы с tabs -----
  const { setTabValue, tabValue, tabValueChangeHandler, tabsData } = useSuperTabs()

  // ----- Хук для работы с сортировкой -----
  const { setTableSort, sortTableOnClickHandler, tableSort } = useSuperDecksSort()

  // ----- Блок работы с запросом на сервер и получения данных -----
  const { data, error, isLoading } = useGetDecksQuery({
    authorId: tabValue === tabsData[1].value ? undefined : '12321435',
    currentPage: +currentPage,
    itemsPerPage: +itemsPerPage,
    maxCardsCount: sliderMaxCardsCount,
    minCardsCount: sliderMinCardsCount,
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
  const clearFilterOnClickHandler = () => {
    setSliderValues([0, 25])
    searchInputResetHandler()
    setTabValue(tabsData[1].value)
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
        <Button onClick={clearFilterOnClickHandler}>Reload</Button>
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
        clearFilterOnClick={clearFilterOnClickHandler}
        searchInputOnChange={searchInputOnChangeHandler}
        searchInputReset={searchInputResetHandler}
        searchInputValue={search}
        sliderValue={[sliderMinCardsCount, sliderMaxCardsCount]}
        sliderValueChange={sliderValueChangeHandler}
        tabValue={tabValue}
        tabValueChange={tabValueChangeHandler}
        tabsData={tabsData}
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
