import { ChangeEvent } from 'react'
import { useParams } from 'react-router-dom'

import { useSuperPagination } from '@/pages/hooks/useSuperPagination'
import { useSuperSearch } from '@/pages/ui/decks/hooks/useSuperSearch'
import {
  useDeleteCardMutation,
  useGetCardsQuery,
  useGetDeckByIdQuery,
  useUpdateCardMutation,
} from '@/services'
import {
  BackToDecks,
  CardsTable,
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
  const params = useParams()
  const deckId = params.deckId ?? ''

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

  // ----- Запросили deck по id чтобы получить cover и name -----
  const { data: deckByIdData } = useGetDeckByIdQuery({ id: deckId })

  // ----- Запросили cards используя deck.id  -----
  const { data: cardsData, isLoading } = useGetCardsQuery(
    //{ id: deckId },
    {
      //authorId: 'qew',
      currentPage: +currentPage,
      id: deckId,
      itemsPerPage: +itemsPerPage,
      question: search,
      //name: search,
      //orderBy: tableSort,
    }
  )

  console.log(cardsData)

  // // ----- Хук который необходим для работы пагинации и с url-ом -----
  // const { searchParams, setSearchParams } = useSuperPagination([5, 10, 15])
  //
  // // ----- Хук для работы с поиском по названию вопроса -----
  // const { cardsQuestionSearch, data, search, searchTextResetHandler, setData } =
  //   useSuperCardsSearch(mockCardsData, searchParams, setSearchParams)

  // // ----- Хук для работы с сортировкой -----
  // const { cardTableSort, sortOnClickHandler } = useSuperCardsSort(mockCardsData, setData)

  // ----- Проверка по id и изменение отображения компоненты -----
  const userId = 6 === 6

  // ----- Блок работы с запросом на сервер и получения данных -----
  //const [skip, setSkip] = useState(true)

  const [deleteCard] = useDeleteCardMutation()
  const [updateCard] = useUpdateCardMutation()
  // const [createCard] = useCreateCardMutation()

  // if (!skip) {
  //   console.log('Cards', data)
  // }

  const deleteCardHandler = (id: string) => {
    deleteCard({ id })
  }

  const updateCardHandler = (id: string) => {
    updateCard({ id })
  }

  // ----- Показывать Loader -----
  if (isLoading) {
    return <h1>Loading...</h1>
  }

  // const createCardHandler = (id: string) => {
  //   createCard({ answer: 'why&', id, question: 'because' })
  //   console.log('createCard')
  // }

  return (
    <Page mt={'24px'}>
      <BackToDecks iconId={'arrowBackOutline'} title={'Back to Decks List'} />
      <ListHeader
        buttonTitle={userId ? 'Add new card' : 'Learn to Pack'}
        title={deckByIdData?.name ?? 'Super Deck'}
        userId={userId}
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
            //cardTableSort={cardTableSort}
            cards={cardsData?.items}
            editFunction={updateCardHandler}
            //sortOnClick={sortOnClickHandler}
            trashFunction={deleteCardHandler}
            userId={userId}
          />
          <Pagination
            count={cardsData?.pagination.totalPages || 0}
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
