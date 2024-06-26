import { toast } from 'react-toastify'

import { DeckFormValues } from '@/entities'
import { useCreateDeckMutation, useGetDecksQuery, useMeQuery } from '@/services'
import { LineLoader, Page, Typography } from '@/shared'

import s from './Decks.page.module.scss'

import { ListHeader, Pagination } from './../_components'
import { useSuperPagination, useSuperSearch, useSuperSort } from './../_hooks'
import { DeckControlBlock, DecksTable } from './components'
import { useSuperSlider, useSuperTabs } from './hooks'

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
  const { inputFinalValue, inputValue, searchInputOnChangeHandler, searchInputResetHandler } =
    useSuperSearch(searchParams, setSearchParams)

  // ----- Хук для работы со слайдером -----
  const {
    defaultSliderValues,
    minMaxCardsData,
    setSliderFinalValues,
    setSliderValues,
    sliderFinalValues,
    sliderValueChangeHandler,
    sliderValueCommitHandler,
    sliderValues,
  } = useSuperSlider()

  // ----- Хук для работы с tabs -----
  const { setTabValue, tabValue, tabValueChangeHandler, tabsList } = useSuperTabs()

  // ----- Хук для работы с сортировкой -----
  const { setTableSort, sortTableOnClickHandler, tableSort } = useSuperSort()

  // ----- Запрос для получения id пользователя -----
  const { data: me } = useMeQuery() // loader для me запроса в layout
  const authorId = tabValue === tabsList[0].value ? me?.id : undefined

  // ----- Блок работы с запросом на сервер и получения данных -----
  const {
    data,
    isFetching: isGetDecksFetching,
    isLoading: isGetDecksLoading,
  } = useGetDecksQuery({
    authorId,
    currentPage: +currentPage,
    itemsPerPage: +itemsPerPage,
    maxCardsCount: sliderFinalValues[1],
    minCardsCount: sliderFinalValues[0],
    name: inputFinalValue,
    orderBy: tableSort,
  })

  // ----- Блок работы с созданием колоды -----
  const [createDeck, { isLoading: isCreateDeckLoading }] = useCreateDeckMutation()

  async function onSubmitAddDeckHandler(data: DeckFormValues) {
    await createDeck({ ...data })
    toast.success('Deck added! Ready to fill it with some cards?')
  }

  // ----- Очистили filters при нажатии на кнопку -----
  const clearFilterHandler = () => {
    setSliderFinalValues(defaultSliderValues)
    setSliderValues(defaultSliderValues)
    searchInputResetHandler()
    setTabValue(tabsList[1].value)
    setTableSort('updated-desc')

    searchParams.set('currentPage', '1')
    setSearchParams(searchParams)
  }

  // ----- Показывать Loader -----
  const isShowLineLoader = isGetDecksLoading || isCreateDeckLoading || isGetDecksFetching

  return (
    <>
      {isShowLineLoader && <LineLoader />}
      <Page>
        <ListHeader
          buttonType={'Deck'}
          onSubmitAddDeck={onSubmitAddDeckHandler}
          title={'Decks List'}
        />
        <DeckControlBlock
          clearFilterOnClick={clearFilterHandler}
          minMaxCardsData={minMaxCardsData}
          searchInputOnChange={searchInputOnChangeHandler}
          searchInputReset={searchInputResetHandler}
          searchInputValue={inputValue}
          sliderValueChange={sliderValueChangeHandler}
          sliderValueCommit={sliderValueCommitHandler}
          sliderValues={sliderValues}
          tabValue={tabValue}
          tabValueChange={tabValueChangeHandler}
          tabsData={tabsList}
        />
        {data?.items.length !== 0 ? (
          <>
            <DecksTable
              authorId={me?.id}
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
    </>
  )
}
