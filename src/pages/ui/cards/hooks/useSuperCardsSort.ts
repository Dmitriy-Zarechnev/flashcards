import { useState } from 'react'

import { GetCardsResponse } from '@/services'
import { SortValue } from '@/shared'

export const useSuperCardsSort = (
  mockCardsData: GetCardsResponse[],
  setData: (data: GetCardsResponse[]) => void
) => {
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

  return { cardTableSort, sortOnClickHandler }
}
