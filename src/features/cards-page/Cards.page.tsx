import { useState } from 'react'

import { useDeleteCardMutation, useUpdateCardMutation } from '@/services/cards/cards.service'
import { GetCardsResponse } from '@/services/cards/cards.types'
import {
  BackToDecks,
  CardsTable,
  ListHeader,
  Page,
  SearchInput,
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

  // ----- Блок работы с поиском по названию вопроса -----
  const [data, setData] = useState<GetCardsResponse[]>(mockCardsData)

  const search = searchParams.get('search') ?? ''

  function handleSearch(value: string) {
    if (value.length) {
      setData(data.filter(card => card.question.toLowerCase().includes(value)))
      searchParams.set('search', value)
    } else {
      setData(mockCardsData)
      searchParams.delete('search')
    }
    setSearchParams(searchParams)
  }

  const searchTextResetHandler = () => {
    setData(mockCardsData)
    searchParams.delete('search')
    setSearchParams(searchParams)
  }

  // ----- Блок работы с сортировкой -----
  const [cardTableSort, setCardTableSort] = useState<SortValue>('default')

  const sortOnClickHandler = (sortValue: SortValue) => {
    if (sortValue !== cardTableSort) {
      const sortedCards = mockCardsData.slice(0).sort((a, b) => {
        switch (sortValue) {
          case 'grade':
            return a[sortValue] - b[sortValue]
          case 'updated':
            return Date.parse(a[sortValue]) - Date.parse(b[sortValue])
          case 'default':
            return Date.parse(a['updated']) - Date.parse(b['updated'])
          default:
            return a[sortValue].localeCompare(b[sortValue])
        }
      })

      setData(sortedCards)
      setCardTableSort(sortValue)
    } else {
      setData(mockCardsData)
      setCardTableSort('default')
    }
  }

  // const [cardTableSort, setCardTableSort] = useState<SortValue>('updated')
  //
  // const sortOnClickHandler = (sortValue: SortValue) => {
  //   if (sortValue !== cardTableSort) {
  //     const sortedCards = data.slice(0).sort((a, b) => {
  //       switch (sortValue) {
  //         case 'grade':
  //           return a[sortValue] - b[sortValue]
  //         case 'updated':
  //           return Date.parse(a[sortValue]) - Date.parse(b[sortValue])
  //         default:
  //           return a[sortValue].localeCompare(b[sortValue])
  //       }
  //     })
  //
  //     setCardTableSort(sortValue)
  //     setData(sortedCards)
  //   } else {
  //     const sortedCards = data.slice(0).sort((a, b) => {
  //       switch (sortValue) {
  //         case 'grade':
  //           return b[sortValue] - a[sortValue]
  //         case 'updated':
  //           return Date.parse(b[sortValue]) - Date.parse(a[sortValue])
  //         default:
  //           return b[sortValue].localeCompare(a[sortValue])
  //       }
  //     })
  //
  //     setData(sortedCards)
  //   }
  // }
  // ----- Проверка по id и изменение отображения компоненты -----
  const userId = 6 === 6

  // ----- Блок работы с запросом на сервер и получения данных -----

  //const cardsId = 'clww4ulv105gpmp019pyckc5f'

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
        onChange={e => handleSearch(e.currentTarget.value)}
        placeholder={'Find your question'}
        searchTextResetHandler={searchTextResetHandler}
        value={search}
      />
      <CardsTable
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
