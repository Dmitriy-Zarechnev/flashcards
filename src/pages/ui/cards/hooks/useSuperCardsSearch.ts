import { useState } from 'react'

import { GetCardsResponse } from '@/services'

export const useSuperCardsSearch = (
  mockCardsData: GetCardsResponse[],
  searchParams: URLSearchParams,
  setSearchParams: (newSearchParams: URLSearchParams) => void
) => {
  const [data, setData] = useState<GetCardsResponse[]>(mockCardsData)

  const search = searchParams.get('search') ?? ''

  function cardsQuestionSearch(value: string) {
    if (value.length) {
      setData(data.filter(card => card.question.toLowerCase().includes(value.toLowerCase())))
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

  return { cardsQuestionSearch, data, search, searchTextResetHandler, setData }
}
