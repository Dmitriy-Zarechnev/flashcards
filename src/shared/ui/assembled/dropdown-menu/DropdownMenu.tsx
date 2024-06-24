import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

import { CardDeleteModal, DeckFormValues, DeckModal } from '@/entities'
import { useIdFromParams } from '@/pages/hooks/useIdFromParams'
import { useDeleteDeckMutation, useGetDeckByIdQuery, useUpdateDeckMutation } from '@/services'
import { Dropdown, Icon, LineLoader, PATH, Typography } from '@/shared'

export const DropdownMenu = () => {
  const navigate = useNavigate()

  // ----- Достали deck id из url-а -----
  const { deckId } = useIdFromParams()

  // ----- Запросили deck по id чтобы получить cover и name -----
  const { data: deckByIdData, isLoading: isGetDeckByIdLoading } = useGetDeckByIdQuery({
    id: deckId,
  })

  // ----- Блок работы с удалением и редактированием колод -----
  const [deleteDeck, { isLoading: isDeleteLoadig }] = useDeleteDeckMutation()
  const [updateDeck, { isLoading: isUpdateLoading }] = useUpdateDeckMutation()

  function learnHandler() {
    if (deckByIdData?.cardsCount === 0) {
      // Останавливаем переход по ссылке
      toast.warning('This deck is not ready for learning yet.')
    } else {
      navigate(`${PATH.DECKSPAGE}/${deckId}/learn`)
    }
  }

  // TODO нужно доделать updateHandler, просто уже поздно пошёл спать 💩💩💩

  async function updateDeckHandler(data: DeckFormValues) {
    await updateDeck({ id: deckId, ...data })
  }

  function updateHandler() {}

  async function deleteDeckHandler() {
    await deleteDeck({ id: deckId })
    toast.success("Deck removed. It's gone for good!")
    /* после удаления колоды - вернем пользователя на страницу колод.
       если этого не сделать, то попадем в Error404 */
    navigate(PATH.DECKSPAGE)
  }

  const isShowLineLoader = isDeleteLoadig || isUpdateLoading || isGetDeckByIdLoading

  return (
    <>
      {isShowLineLoader && <LineLoader />}
      <Dropdown.Root trigger={<Icon iconId={'group1399'} />}>
        <Dropdown.Item onClick={learnHandler}>
          <Icon iconId={'playCircleOutline'} />
          <Typography.Caption>Learn</Typography.Caption>
        </Dropdown.Item>
        <Dropdown.Separator />
        <Dropdown.Item
          onClick={() => {
            console.log('click')
            updateHandler()
          }}
        >
          <DeckModal
            deckData={{
              cover: deckByIdData?.cover,
              isPrivate: deckByIdData?.isPrivate,
              name: deckByIdData?.name,
            }}
            onSubmit={updateDeckHandler}
            variant={'edit'}
          />
          <Typography.Caption>Edit</Typography.Caption>
        </Dropdown.Item>
        <Dropdown.Separator />
        <Dropdown.Item onClick={deleteDeckHandler}>
          <CardDeleteModal
            cardName={deckByIdData?.name}
            deleteCb={deleteDeckHandler}
            type={'Deck'}
          />
          <Typography.Caption>Delete</Typography.Caption>
        </Dropdown.Item>
      </Dropdown.Root>
    </>
  )
}
