import { useNavigate } from 'react-router-dom'

import { CardDeleteModal, DeckFormValues, DeckModal } from '@/entities'
import { useIdFromParams } from '@/pages/hooks/useIdFromParams'
import { useDeleteDeckMutation, useGetDeckByIdQuery, useUpdateDeckMutation } from '@/services'
import { Dropdown, Icon, LineLoader, PATH, Typography } from '@/shared'

export const DropdownMenu = () => {
  const navigate = useNavigate()

  // ----- Достали deck id из url-а -----
  const { deckId } = useIdFromParams()

  // ----- Запросили deck по id чтобы получить cover и name -----
  const {
    data: deckByIdData = { cover: null, isPrivate: false, name: 'name' },
    isLoading: isGetDeckByIdLoading,
  } = useGetDeckByIdQuery({ id: deckId })

  // ----- Блок работы с удалением и редактированием колод -----
  const [deleteDeck, { isLoading: isDeleteLoadig }] = useDeleteDeckMutation()
  const [updateDeck, { isLoading: isUpdateLoading }] = useUpdateDeckMutation()

  // TODO так как роутинг теперь через navigate => можно удалить NavLink и стили для неё

  function learnHandler() {
    navigate(`${PATH.DECKSPAGE}/${deckId}/learn`)
  }

  // TODO нужно доделать updateHandler, просто уже поздно пошёл спать 💩💩💩

  async function updateDeckHandler(data: DeckFormValues) {
    await updateDeck({ id: deckId, ...data })
  }

  function updateHandler() {}

  async function deleteDeckHandler() {
    await deleteDeck({ id: deckId })

    /* после удаления колоды - вернем пользователя на страницу колод.
       если этого не сделать, то попадем в Error404 */
    navigate(PATH.DECKSPAGE)
  }

  function deleteHandler() {
    deleteDeckHandler()
  }

  const isShowLineLoader = isDeleteLoadig || isUpdateLoading || isGetDeckByIdLoading

  return (
    <>
      {isShowLineLoader && <LineLoader />}
      <Dropdown.Root trigger={<Icon iconId={'group1399'} />}>
        <Dropdown.Item onClick={learnHandler}>
          {/*<NavLink className={s.learnLink} to={`${PATH.DECKSPAGE}/${deckId}/learn`}>*/}
          <Icon iconId={'playCircleOutline'} />
          <Typography.Caption>Learn</Typography.Caption>
          {/*</NavLink>*/}
        </Dropdown.Item>
        <Dropdown.Separator />
        <Dropdown.Item onClick={updateHandler}>
          <DeckModal
            deckData={{
              cover: deckByIdData.cover,
              isPrivate: deckByIdData.isPrivate,
              name: deckByIdData.name,
            }}
            onSubmit={updateDeckHandler}
            variant={'edit'}
          />
          {/*<Icon iconId={'editOutline'} />*/}
          <Typography.Caption>Edit</Typography.Caption>
        </Dropdown.Item>
        <Dropdown.Separator />
        <Dropdown.Item onClick={deleteHandler}>
          <CardDeleteModal
            cardName={deckByIdData.name}
            deleteCb={deleteDeckHandler}
            type={'Deck'}
          />
          {/*<Icon iconId={'trashOutline'} />*/}
          <Typography.Caption>Delete</Typography.Caption>
        </Dropdown.Item>
      </Dropdown.Root>
    </>
  )
}
