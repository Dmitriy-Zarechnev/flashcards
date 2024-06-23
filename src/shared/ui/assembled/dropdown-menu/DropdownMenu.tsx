import { MouseEvent } from 'react'
import { NavLink } from 'react-router-dom'
import { toast } from 'react-toastify'

import { CardDeleteModal, DeckFormValues, DeckModal } from '@/entities'
import { useIdFromParams } from '@/pages/hooks/useIdFromParams'
import { useDeleteDeckMutation, useGetDeckByIdQuery, useUpdateDeckMutation } from '@/services'
import { Dropdown, Icon, Typography } from '@/shared'
import { PATH } from '@/shared/utils/routerVariables'

import s from './DropdownMenu.module.scss'

export const DropdownMenu = () => {
  // ----- Достали deck id из url-а -----
  const { deckId } = useIdFromParams()

  // ----- Запросили deck по id чтобы получить cover и name -----
  const { data: deckByIdData } = useGetDeckByIdQuery({ id: deckId })

  // ----- Заблокировали переход на страницу learn при пустой колоде -----
  const handleLinkClick = (e: MouseEvent<HTMLAnchorElement>) => {
    if (deckByIdData?.cardsCount === 0) {
      // Останавливаем переход по ссылке
      e.preventDefault()
      toast.warning('This deck is not ready for learning yet.')
    }
  }

  // ----- Блок работы с удалением и редактированием колод -----
  const [deleteDeck] = useDeleteDeckMutation()
  const [updateDeck] = useUpdateDeckMutation()

  async function updateDeckHandler(data: DeckFormValues) {
    await updateDeck({ id: deckId, ...data })
  }

  async function deleteDeckHandler() {
    await deleteDeck({ id: deckId })
  }

  return (
    <Dropdown.Root trigger={<Icon iconId={'group1399'} />}>
      <Dropdown.Item>
        <NavLink
          className={s.learnLink}
          onClick={handleLinkClick}
          to={`${PATH.DECKSPAGE}/${deckId}/learn`}
        >
          <Icon iconId={'playCircleOutline'} />
          <Typography.Caption>Learn</Typography.Caption>
        </NavLink>
      </Dropdown.Item>
      <Dropdown.Separator />
      <Dropdown.Item>
        <DeckModal
          deckData={{
            cover: deckByIdData?.cover,
            isPrivate: deckByIdData?.isPrivate,
            name: deckByIdData?.name,
          }}
          onSubmit={updateDeckHandler}
          variant={'edit'}
        />
        {/*<Icon iconId={'editOutline'} />*/}
        <Typography.Caption>Edit</Typography.Caption>
      </Dropdown.Item>
      <Dropdown.Separator />
      <Dropdown.Item>
        <CardDeleteModal cardName={deckByIdData?.name} deleteCb={deleteDeckHandler} type={'Deck'} />
        {/*<Icon iconId={'trashOutline'} />*/}
        <Typography.Caption>Delete</Typography.Caption>
      </Dropdown.Item>
    </Dropdown.Root>
  )
}
