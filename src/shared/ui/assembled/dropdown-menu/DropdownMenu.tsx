import { useParams } from 'react-router-dom'

import { CardDeleteModal, DeckFormValues, DeckModal } from '@/entities'
import { useDeleteDeckMutation, useGetDeckByIdQuery, useUpdateDeckMutation } from '@/services'
import { Dropdown, Icon, Typography } from '@/shared'

export const DropdownMenu = () => {
  // ----- Достали deck id из url-а -----
  const params = useParams()
  const deckId = params.deckId ?? ''

  // ----- Запросили deck по id чтобы получить cover и name -----
  const { data: deckByIdData = { cover: null, isPrivate: false, name: 'name' } } =
    useGetDeckByIdQuery({ id: deckId })

  // ----- Блок работы с удалением и редактированием колод -----
  const [deleteDeck] = useDeleteDeckMutation()
  const [updateDeck] = useUpdateDeckMutation()

  async function updateDeckHandler(data: DeckFormValues) {
    await updateDeck({ id: deckId, ...data })
  }

  async function deleteDeckHandler() {
    await deleteDeck({ id: deckId })
  }
  // const playDeckHandler = () => {}

  return (
    <Dropdown.Root trigger={<Icon iconId={'group1399'} />}>
      <Dropdown.Item>
        <Icon iconId={'playCircleOutline'} />
        <Typography.Caption>Learn</Typography.Caption>
      </Dropdown.Item>
      <Dropdown.Separator />
      <Dropdown.Item>
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
      <Dropdown.Item>
        <CardDeleteModal cardName={deckByIdData.name} deleteCb={deleteDeckHandler} type={'Deck'} />
        {/*<Icon iconId={'trashOutline'} />*/}
        <Typography.Caption>Delete</Typography.Caption>
      </Dropdown.Item>
    </Dropdown.Root>
  )
}
