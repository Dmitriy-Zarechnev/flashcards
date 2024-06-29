import { useSearchParams } from 'react-router-dom'

import { getPathname } from '@/services/api/tools/getUrlPath'
import { PATH } from '@/shared'

export const useSuperPagination = (itemsPerPageVar: number[]) => {
  /* 🍍  */

  const [searchParams, setSearchParams] = useSearchParams()

  const currentPage = searchParams.get('currentPage') ?? '1'
  const optionsItemsPerPage = itemsPerPageVar
  const itemsPerPage = searchParams.get('itemsPerPage') ?? `${optionsItemsPerPage[0]}`

  function handleCurrentPage(value: number) {
    if (value) {
      searchParams.set('currentPage', value.toString())
    } else {
      searchParams.delete('currentPage')
    }
    setSearchParams(searchParams)
  }

  function handlePerPage(value: number) {
    if (value) {
      searchParams.set('itemsPerPage', value.toString())
      searchParams.set('currentPage', '1')
    } else {
      searchParams.delete('itemsPerPage')
    }
    setSearchParams(searchParams)
  }

  /* 🍍 Для кнопки назад, с сохранением пагинации.
        Нужно сетать в sessionStorage номер страницы и количество элементов.
       ! но только для decks, из profile | cards

        Если пагинации на страничке decks => сохраняем пагинацию в sessionStorage
        чтобы потом достать и роутингам отправить обратно

        ⛔ в logout удалям вест sessionStorage */
  const urlPath = getPathname() as string

  /* 🍍 обратно на decks */
  if (!urlPath.includes(PATH.DECKSPAGE + '/')) {
    sessionStorage.setItem(
      'itemsPerPage',
      searchParams.get('itemsPerPage') ?? `${optionsItemsPerPage[0]}`
    )
    sessionStorage.setItem('currentPage', searchParams.get('currentPage') ?? '1')
  }

  return {
    currentPage,
    handleCurrentPage,
    handlePerPage,
    itemsPerPage,
    optionsItemsPerPage,
    searchParams,
    setSearchParams,
  }
}
