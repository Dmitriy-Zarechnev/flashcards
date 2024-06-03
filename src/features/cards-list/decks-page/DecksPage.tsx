import { DeckControlBlock } from '@/features/cards-list/decks-page/deck-control-block'
import { DecksTable } from '@/features/cards-list/decks-table/DecksTable'
import { useSuperPagination } from '@/features/cards-list/utils/useSuperPagination'
import {
  useDeleteDeckMutation,
  useGetDecksQuery,
  useUpdateDeckMutation,
} from '@/services/decks/decks.service'
import { Page, Pagination } from '@/shared'

import { ListHeader } from '../../../shared/ui/default/list-header'

export const DecksPage = () => {
  // ----- Хук который необходим для работы пагинации и с url-ом -----
  const { currentPage, handleCurrentPage, handlePerPage, itemsPerPage, optionsItemsPerPage } =
    useSuperPagination([5, 10, 15, 20])

  // ----- Блок работы с запросом на сервер и получения данных -----
  const { data, error, isLoading } = useGetDecksQuery({
    currentPage: +currentPage,
    itemsPerPage: +itemsPerPage,
  })
  const [deleteDeck] = useDeleteDeckMutation()
  const [updateDeck] = useUpdateDeckMutation()

  const updateDeckHandler = (id: string) => {
    updateDeck({ id })
  }
  const deleteDeckHandler = (id: string) => {
    deleteDeck({ id })
  }

  const playDeckHandler = () => {}

  // ----- Проверка по id и изменение отображения компоненты -----
  const userId = 6 === 6

  // ----- Показывать Loader -----
  if (isLoading) {
    return <h1>Loading...</h1>
  }

  // ----- Показывать страницу при пустых данных -----
  if (data?.items.length === 0) {
    return <h1>Empty😣</h1>
  }

  // ----- Показывать страницу с ошибкой -----
  if (error) {
    return <div>Error: {JSON.stringify(error)}</div>
  }

  return (
    <Page>
      <ListHeader buttonTitle={'Add new deck'} title={'Decks List'} />
      <DeckControlBlock />
      <DecksTable
        clickDeleteDeck={deleteDeckHandler}
        clickUpdateDeck={updateDeckHandler}
        decks={data?.items}
        playFunction={playDeckHandler}
        userId={userId}
      />
      <Pagination
        count={data?.pagination.totalPages || 0}
        onChange={handleCurrentPage}
        onPerPageChange={handlePerPage}
        page={+currentPage}
        perPage={+itemsPerPage}
        perPageOptions={optionsItemsPerPage}
      />
    </Page>
  )
}
