import { useParams } from 'react-router-dom'

import { useSuperPagination } from '@/pages/hooks/useSuperPagination'
import { useSuperCardsSearch } from '@/pages/ui/cards/hooks/useSuperCardsSearch'
import { useSuperCardsSort } from '@/pages/ui/cards/hooks/useSuperCardsSort'
import {
  useDeleteCardMutation,
  useGetCardsQuery,
  useGetDeckByIdQuery,
  useUpdateCardMutation,
} from '@/services'
import { BackToDecks, CardsTable, ListHeader, Page, SearchInput, Typography } from '@/shared'
import defDeckImg from '@/shared/assets/card-default-cover.webp'

import s from './Cards.page.module.scss'

const mockCardsData = [
  {
    answer: 'Столица Франции - Париж.',
    answerImg: '',
    answerVideo: 'https://example.com/answer-video.mp4',
    created: '2024-06-02T12:00:00.000Z',
    deckId: 'deck-456hgf',
    grade: 5,
    id: 'card-12dsd3',
    question: 'Морская',
    questionImg: '',
    questionVideo: 'https://example.com/question-video.mp4',
    shots: 3,
    updated: '2024-06-03T15:30:00.000Z',
    userId: 'user-789asa',
  },
  {
    answer: 'Столица Франции - Париж.',
    answerImg: '',
    answerVideo: 'https://example.com/answer-video.mp4',
    created: '2024-06-02T12:00:00.000Z',
    deckId: 'deck-4dsd56',
    grade: 5,
    id: 'card-123fasww',
    question: 'Самая высокая гора в мире - Эверест.',
    questionImg: '',
    questionVideo: 'https://example.com/question-video.mp4',
    shots: 3,
    updated: '2024-06-03T15:30:00.000Z',
    userId: 'user-789sad',
  },
  {
    answer: 'Самая высокая гора в мире - Эверест.',
    answerImg: '',
    answerVideo: '',
    created: '2024-04-15T09:20:00.000Z',
    deckId: 'deck-78asd9',
    grade: 4,
    id: 'card-456dsad',
    question: 'Какая гора является самой высокой в мире?',
    questionImg: '',
    questionVideo: '',
    shots: 5,
    updated: '2024-04-18T11:35:00.000Z',
    userId: 'user-32asd1',
  },
  {
    answer: 'Столица Франции - Париж.',
    answerImg: '',
    answerVideo: 'https://example.com/answer-video.mp4',
    created: '2024-06-02T12:00:00.000Z',
    deckId: 'deck-456sad',
    grade: 5,
    id: 'card-123asfsa',
    question: 'Морская',
    questionImg: '',
    questionVideo: 'https://example.com/question-video.mp4',
    shots: 3,
    updated: '2024-06-03T15:30:00.000Z',
    userId: 'user-789sa',
  },
  {
    answer: 'Столица Франции - Париж.',
    answerImg: '',
    answerVideo: 'https://example.com/answer-video.mp4',
    created: '2024-06-02T12:00:00.000Z',
    deckId: 'deck-4das56',
    grade: 5,
    id: 'card-123fasfasd',
    question: 'Самая высокая гора в мире - Эверест.',
    questionImg: '',
    questionVideo: 'https://example.com/question-video.mp4',
    shots: 3,
    updated: '2024-06-03T15:30:00.000Z',
    userId: 'user-789ddd',
  },
  {
    answer: 'Самая высокая гора в мире - Эверест.',
    answerImg: '',
    answerVideo: '',
    created: '2024-04-15T09:20:00.000Z',
    deckId: 'deck-78asfd9',
    grade: 4,
    id: 'card-443556',
    question: 'Какая гора является самой высокой в мире?',
    questionImg: '',
    questionVideo: '',
    shots: 5,
    updated: '2024-04-18T11:35:00.000Z',
    userId: 'user-32ss1',
  },
]

export const CardsPage = () => {
  const params = useParams()
  const deckId = params.deckId ?? ''

  // ----- Запросили deck по id чтобы получить cover и name -----
  const { data: deckByIdData } = useGetDeckByIdQuery({ id: deckId })

  // ----- Запросили cards используя deck.id  -----
  const { data: cardsData, isLoading } = useGetCardsQuery({ id: deckId })

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
        //onChange={e => cardsQuestionSearch(e.currentTarget.value)}
        placeholder={'Find your question'}
        // searchTextResetHandler={searchTextResetHandler}
        // value={search}
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
          {/*<Pagination*/}
          {/*  count={paginationCount}*/}
          {/*  onChange={handleCurrentPage}*/}
          {/*  onPerPageChange={handlePerPage}*/}
          {/*  page={+currentPage}*/}
          {/*  perPage={+itemsPerPage}*/}
          {/*  perPageOptions={optionsItemsPerPage}*/}
          {/*/>*/}
        </>
      ) : (
        <Typography.H2 className={s.filterErrorPage}>
          No content with these terms...🤬
        </Typography.H2>
      )}
    </Page>
  )
}
