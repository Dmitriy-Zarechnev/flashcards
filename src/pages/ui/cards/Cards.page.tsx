import { ChangeEvent } from 'react'

import { CardFormValues } from '@/entities'
import { Error404 } from '@/pages'
import { useIdFromParams } from '@/pages/hooks/useIdFromParams'
import { useSuperPagination } from '@/pages/hooks/useSuperPagination'
import { useSuperSearch } from '@/pages/hooks/useSuperSearch'
import { useSuperSort } from '@/pages/hooks/useSuperSort'
import {
  useCreateCardMutation,
  useGetCardsQuery,
  useGetDeckByIdQuery,
  useMeQuery,
} from '@/services'
import {
  BackToDecks,
  CardsTable,
  LineLoader,
  ListHeader,
  Page,
  Pagination,
  SearchInput,
  Typography,
} from '@/shared'
import defDeckImg from '@/shared/assets/card-default-cover.webp'

import s from './Cards.page.module.scss'

export const CardsPage = () => {
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
  const { search, searchInputOnChangeHandler, searchInputResetHandler } = useSuperSearch(
    searchParams,
    setSearchParams
  )
  const searchQuestionHandler = (e: ChangeEvent<HTMLInputElement>) => {
    searchInputOnChangeHandler(e.currentTarget.value)
  }

  // ----- Хук для работы с сортировкой -----
  const { sortTableOnClickHandler, tableSort } = useSuperSort()

  // ----- Запросили deck по id чтобы получить cover и name -----
  const { data: deckByIdData } = useGetDeckByIdQuery({ id: deckId })
  // ----- Запрос для получения id пользователя -----
  const { data: me } = useMeQuery()
  // ----- Проверка id и изменение отображения компоненты -----
  const authorId = deckByIdData?.userId === me?.id

  // ----- Запросили cards используя deck.id  -----
  const {
    data: cardsData,
    error,
    isLoading: isGetCardsLoading,
  } = useGetCardsQuery({
    currentPage: +currentPage,
    id: deckId,
    itemsPerPage: +itemsPerPage,
    orderBy: tableSort,
    question: search,
  })

  const paginationDecider = cardsData && cardsData.pagination && cardsData.pagination.totalItems > 5

  // ----- Блок работы с созданием карт в колоде -----
  const [createCard, { isLoading: isCreateCardLoading }] = useCreateCardMutation()

  async function createCardHandler(data: CardFormValues) {
    await createCard({ id: deckId, ...data })
  }

  // ----- Показывать страницу с ошибкой -----
  if (error) {
    return <Error404 />
  }

  const isShowLineLoader = isCreateCardLoading || isGetCardsLoading

  return (
    <>
      {isShowLineLoader && <LineLoader />}
      <Page mt={'24px'}>
        <BackToDecks iconId={'arrowBackOutline'} title={'Back to Decks List'} />
        <ListHeader
          buttonType={'Card'}
          isCardExist={cardsData?.items.length === 0}
          onSubmitAddCard={createCardHandler}
          title={deckByIdData?.name ?? 'Super Deck'}
          userId={authorId}
        />
        <img alt={`Deck picture`} className={s.deckImg} src={deckByIdData?.cover ?? defDeckImg} />
        <SearchInput
          className={s.searchInput}
          onChange={searchQuestionHandler}
          placeholder={'Look for the question that you need'}
          searchTextResetHandler={searchInputResetHandler}
          value={search}
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
