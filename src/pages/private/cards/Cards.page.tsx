import { ChangeEvent } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

import { CardFormValues } from '@/entities'
import {
  useCreateCardMutation,
  useGetCardsQuery,
  useGetDeckByIdQuery,
  useMeQuery,
} from '@/services'
import { LineLoader, Page, Typography, deckDefaultCover } from '@/shared'

import s from './Cards.page.module.scss'

import { getBackToDeckRoutingParams } from '../_tools/backRoutingWithParams'
import { BackToDecks, ListHeader, Pagination, SearchInput } from './../_components'
import { useIdFromParams, useSuperPagination, useSuperSearch, useSuperSort } from './../_hooks'
import { CardsTable } from './components/cards-table/CardsTable'

export const CardsPage = () => {
  const navigate = useNavigate()

  // ----- Достали deck id из url-а -----
  const { deckId } = useIdFromParams()

  // ----- Хук для работы пагинации и с url-ом -----
  const {
    currentPage,
    handleCurrentPage,
    handlePerPage,
    itemsPerPage,
    optionsItemsPerPage,
    searchParams,
    setSearchParams,
  } = useSuperPagination([5, 10, 15])

  // ----- Хук и функция для работы с поиском по вопросу -----
  const { inputFinalValue, inputValue, searchInputOnChangeHandler, searchInputResetHandler } =
    useSuperSearch(searchParams, setSearchParams)
  const searchQuestionHandler = (e: ChangeEvent<HTMLInputElement>) => {
    searchInputOnChangeHandler(e.currentTarget.value)
  }

  // ----- Хук для работы с сортировкой -----
  const { sortTableOnClickHandler, tableSort } = useSuperSort()

  // ----- Запросили deck по id чтобы получить cover и name -----
  const { data: deckByIdData, isLoading: isGetDeckByIdLoading } = useGetDeckByIdQuery({
    id: deckId,
  })
  // ----- Запрос для получения id пользователя -----
  const { data: me } = useMeQuery()
  // ----- Проверка id и изменение отображения компоненты -----
  const authorId = deckByIdData?.userId === me?.id

  // ----- Запросили cards используя deck.id  -----
  const {
    data: cardsData,
    isFetching: isGetCardsFetching,
    isLoading: isGetCardsLoading,
  } = useGetCardsQuery({
    currentPage: +currentPage,
    id: deckId,
    itemsPerPage: +itemsPerPage,
    orderBy: tableSort,
    question: inputFinalValue,
  })

  // ----- Условие по которому показываем или нет Pagination -----
  const paginationDecider = cardsData && cardsData.pagination && cardsData.pagination.totalItems > 5

  // ----- Блок работы с созданием карт в колоде -----
  const [createCard, { isLoading: isCreateCardLoading }] = useCreateCardMutation()

  async function createCardHandler(data: CardFormValues) {
    await createCard({ id: deckId, ...data })
    toast.success('Card created! Ready to add another?')
  }

  // ----- Показывать Loader -----
  const isShowLineLoader =
    isCreateCardLoading || isGetCardsLoading || isGetCardsFetching || isGetDeckByIdLoading

  function routeBackToDecks() {
    navigate(getBackToDeckRoutingParams())
  }

  return (
    <>
      {isShowLineLoader && <LineLoader />}

      <Page mt={'24px'}>
        <BackToDecks navigationCb={routeBackToDecks} title={'Back to Decks List'} />
        <ListHeader
          buttonType={'Card'}
          isCardExist={cardsData?.items.length === 0}
          onSubmitAddCard={createCardHandler}
          title={deckByIdData?.name ?? 'Unknown'}
          userId={authorId}
        />
        <img
          alt={`Deck picture`}
          className={s.deckImg}
          src={deckByIdData?.cover ?? deckDefaultCover}
        />
        <SearchInput
          className={s.searchInput}
          onChange={searchQuestionHandler}
          placeholder={'Look for the question that you need'}
          searchTextResetHandler={searchInputResetHandler}
          value={inputValue}
        />
        {cardsData?.items.length !== 0 ? (
          <>
            <CardsTable
              authorId={authorId}
              cards={cardsData?.items}
              sortTableOnClick={sortTableOnClickHandler}
              tableSort={tableSort}
            />
            {paginationDecider && (
              <Pagination
                count={cardsData?.pagination.totalPages || 0}
                onChange={handleCurrentPage}
                onPerPageChange={handlePerPage}
                page={+currentPage}
                perPage={+itemsPerPage}
                perPageOptions={optionsItemsPerPage}
              />
            )}
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
