import { DeckFormValues } from '@/entities'
import { Error404 } from '@/pages'
import { useSuperPagination } from '@/pages/hooks/useSuperPagination'
import { useSuperSearch } from '@/pages/hooks/useSuperSearch'
import { useSuperSlider } from '@/pages/hooks/useSuperSlider'
import { useSuperSort } from '@/pages/hooks/useSuperSort'
import { useSuperTabs } from '@/pages/hooks/useSuperTabs'
import { useCreateDeckMutation, useGetDecksQuery, useMeQuery } from '@/services'
import { DeckControlBlock, DecksTable, ListHeader, Page, Pagination, Typography } from '@/shared'

import s from './Decks.page.module.scss'

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

  // ----- Хук для работы с поиском по названию колоды -----
  const { search, searchInputOnChangeHandler, searchInputResetHandler } = useSuperSearch(
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
  const { setTableSort, sortTableOnClickHandler, tableSort } = useSuperSort()

  // ----- Запрос для получения id пользователя -----
  const { data: me } = useMeQuery()
  const authorId = tabValue === tabsList[0].value ? me?.id : undefined

  // ----- Блок работы с запросом на сервер и получения данных -----
  const { data, error, isLoading } = useGetDecksQuery({
    authorId,
    currentPage: +currentPage,
    itemsPerPage: +itemsPerPage,
    maxCardsCount: sliderValues[1],
    minCardsCount: sliderValues[0],
    name: search,
    orderBy: tableSort,
  })

  // ----- Блок работы с созданием колоды -----
  const [createDeck] = useCreateDeckMutation()

  async function onSubmitAddDeckHandler(data: DeckFormValues) {
    await createDeck({ ...data })
  }

  // ----- Очистили filters при нажатии на кнопку -----
  const clearFilterHandler = () => {
    setSliderValues(defaultSliderValues)
    searchInputResetHandler()
    setTabValue(tabsList[1].value)
    setTableSort('updated-desc')

    searchParams.set('currentPage', '1')
    setSearchParams(searchParams)
  }

  // ----- Показывать Loader -----
  if (isLoading) {
    return <h1>Loading...</h1>
  }

  // ----- Показывать страницу с ошибкой -----
  if (error) {
    return <Error404 />
  }

  return (
    <Page>
      <ListHeader
        buttonTitle={'Add new deck'}
        onSubmitAddDeck={onSubmitAddDeckHandler}
        title={'Decks List'}
      />
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
      {data?.items.length !== 0 ? (
        <>
          <DecksTable
            authorId={authorId}
            decks={data?.items}
            sortTableOnClick={sortTableOnClickHandler}
            tableSort={tableSort}
          />
          <Pagination
            count={data?.pagination.totalPages || 0}
            onChange={handleCurrentPage}
            onPerPageChange={handlePerPage}
            page={+currentPage}
            perPage={+itemsPerPage}
            perPageOptions={optionsItemsPerPage}
          />
        </>
      ) : (
        <Typography.H2 className={s.filterErrorPage}>
          No content with these terms...🤬
        </Typography.H2>
      )}
    </Page>
  )
}
