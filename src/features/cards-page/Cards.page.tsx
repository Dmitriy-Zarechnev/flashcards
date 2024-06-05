import { GetCardsResponse, useDeleteCardMutation, useUpdateCardMutation } from '@/services'
import {
  BackToDecks,
  CardsTable,
  ListHeader,
  Page,
  SearchInput,
  useSuperCardsSearch,
  useSuperCardsSort,
  useSuperPagination,
} from '@/shared'
import defDeckImg from '@/shared/assets/card-default-cover.webp'

import s from './Cards.page.module.scss'

export type SortValue = 'answer' | 'default' | 'grade' | 'question' | 'updated'

const mockCardsData: GetCardsResponse[] = [
  {
    answer: 'Столица Франции - Париж.',
    answerImg: '',
    answerVideo: 'https://example.com/answer-video.mp4',
    created: '2024-06-02T12:00:00.000Z',
    deckId: 'deck-456',
    grade: 5,
    id: 'card-123',
    question: 'Морская',
    questionImg: '',
    questionVideo: 'https://example.com/question-video.mp4',
    shots: 3,
    updated: '2024-06-03T15:30:00.000Z',
    userId: 'user-789',
  },
  {
    answer: 'Столица Франции - Париж.',
    answerImg: '',
    answerVideo: 'https://example.com/answer-video.mp4',
    created: '2024-06-02T12:00:00.000Z',
    deckId: 'deck-456',
    grade: 5,
    id: 'card-123fas',
    question: 'Самая высокая гора в мире - Эверест.',
    questionImg: '',
    questionVideo: 'https://example.com/question-video.mp4',
    shots: 3,
    updated: '2024-06-03T15:30:00.000Z',
    userId: 'user-789',
  },
  {
    answer: 'Самая высокая гора в мире - Эверест.',
    answerImg: '',
    answerVideo: '',
    created: '2024-04-15T09:20:00.000Z',
    deckId: 'deck-789',
    grade: 4,
    id: 'card-456',
    question: 'Какая гора является самой высокой в мире?',
    questionImg: '',
    questionVideo: '',
    shots: 5,
    updated: '2024-04-18T11:35:00.000Z',
    userId: 'user-321',
  },
]

export const CardsPage = () => {
  // ----- Хук который необходим для работы пагинации и с url-ом -----
  const { searchParams, setSearchParams } = useSuperPagination([5, 10, 15, 20])

  // ----- Хук для работы с поиском по названию вопроса -----
  const { cardsQuestionSearch, data, search, searchTextResetHandler, setData } =
    useSuperCardsSearch(mockCardsData, searchParams, setSearchParams)

  // ----- Хук для работы с сортировкой -----
  const { cardTableSort, sortOnClickHandler } = useSuperCardsSort(mockCardsData, setData)

  // ----- Проверка по id и изменение отображения компоненты -----
  const userId = 6 === 5

  // ----- Блок работы с запросом на сервер и получения данных -----

  //const [skip, setSkip] = useState(true)

  //const { data } = useGetCardsQuery({ id: cardsId })
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

  // const createCardHandler = (id: string) => {
  //   createCard({ answer: 'why&', id, question: 'because' })
  //   console.log('createCard')
  // }

  return (
    <Page mt={'24px'}>
      <BackToDecks iconId={'arrowBackOutline'} title={'Back to Decks List'} />
      <ListHeader
        buttonTitle={userId ? 'Add new card' : 'Learn to Pack'}
        title={userId ? 'My Deck' : 'Friend’s Deck'}
        userId={userId}
      />
      <img alt={`Deck picture`} className={s.deckImg} src={defDeckImg} />
      <SearchInput
        className={s.searchInput}
        onChange={e => cardsQuestionSearch(e.currentTarget.value)}
        placeholder={'Find your question'}
        searchTextResetHandler={searchTextResetHandler}
        value={search}
      />
      <CardsTable
        cardTableSort={cardTableSort}
        cards={data}
        editFunction={updateCardHandler}
        sortOnClick={sortOnClickHandler}
        trashFunction={deleteCardHandler}
        userId={userId}
      />
      {/*<Pagination*/}
      {/*  count={data.pagination.totalPages || 0}*/}
      {/*  onChange={handleCurrentPage}*/}
      {/*  onPerPageChange={handlePerPage}*/}
      {/*  page={+currentPage}*/}
      {/*  perPage={+itemsPerPage}*/}
      {/*  perPageOptions={optionsItemsPerPage}*/}
      {/*/>*/}
    </Page>
  )
}
