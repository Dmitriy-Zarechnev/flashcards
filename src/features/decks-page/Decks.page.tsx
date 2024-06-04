import { useState } from 'react'

import {
  useDeleteDeckMutation,
  useGetDecksQuery,
  useUpdateDeckMutation,
} from '@/services/decks/decks.service'
import {
  Button,
  DeckControlBlock,
  DecksTable,
  ListHeader,
  Page,
  Pagination,
  TabsData,
  useSuperPagination,
} from '@/shared'

export const DecksPage = () => {
  // ----- Хук который необходим для работы пагинации и с url-ом -----
  const {
    currentPage,
    handleCurrentPage,
    handlePerPage,
    itemsPerPage,
    optionsItemsPerPage,
    searchParams,
    setSearchParams,
  } = useSuperPagination([5, 10, 15, 20])

  // ----- Блок работы с поиском по названию deck -----
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

  // ----- Блок работы со слайдером -----
  const [sliderValues, setSliderValues] = useState([0, 25])

  const [sliderMinCardsCount, sliderMaxCardsCount] = sliderValues

  const sliderValueChangeHandler = (value: number[]) => {
    setSliderValues(value)
  }

  // ----- Блок работы с tabs -----
  const tabsData: TabsData[] = [
    { title: 'My Cards', value: 'My Cards' },
    { title: 'All Cards', value: 'All Cards' },
  ]

  const [tabValue, setTabValue] = useState(tabsData[1].value)
  const tabValueChangeHandler = (value: string) => {
    setTabValue(value)
  }

  // ----- Блок работы с сортировкой -----
  const [tableSort, setTableSort] = useState('updated-desc')

  const sortTableOnClickHandler = (title: string) => {
    if (`${title}-asc` !== tableSort) {
      setTableSort(`${title}-asc`)
    } else {
      setTableSort(`${title}-desc`)
    }
  }

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
