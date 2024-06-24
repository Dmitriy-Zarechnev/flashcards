import { useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

import { CardDeleteModal, DeckFormValues, DeckModal } from '@/entities'
import { useIdFromParams } from '@/pages/hooks/useIdFromParams'
import { useDeleteDeckMutation, useGetDeckByIdQuery, useUpdateDeckMutation } from '@/services'
import { Dropdown, Icon, IconButton, LineLoader, PATH, Typography } from '@/shared'

import s from './DropdownMenu.module.scss'

export const DropdownMenu = () => {
  const navigate = useNavigate()

  // ----- Достали deck id из url-а -----
  const { deckId } = useIdFromParams()

  // ----- Запросили deck по id чтобы получить cover и name -----
  const {
    data: deckByIdData,
    isLoading: isGetDeckByIdLoading,
    refetch: deckByIdRefetch,
  } = useGetDeckByIdQuery({
    id: deckId,
  })

  // ----- Блок работы с переходом на страницу learn -----
  function learnHandler() {
    if (deckByIdData?.cardsCount === 0) {
      // Останавливаем переход по ссылке
      toast.warning('This deck is not ready for learning yet.')
    } else {
      navigate(`${PATH.DECKSPAGE}/${deckId}/learn`)
    }
  }

  // ----- Блок работы с редактированием колод -----
  const [updateDeck, { isLoading: isUpdateLoading }] = useUpdateDeckMutation()

  async function updateDeckHandler(data: DeckFormValues) {
    await updateDeck({ id: deckId, ...data })
    await deckByIdRefetch()
    toast.success('Deck updated! All changes have been saved.')
  }

  // Создаем ref который открывает модальное окно
  const editDeckRef = useRef<HTMLDivElement>(null)

  // Повешали событие, которое срабатывает при клике на Item
  const triggerEditDeckClick = () => {
    if (editDeckRef.current !== null) {
      editDeckRef.current.click()
    }
  }

  // ----- Блок работы с удалением колод -----
  const [deleteDeck, { isLoading: isDeleteLoading }] = useDeleteDeckMutation()

  async function deleteDeckHandler() {
    await deleteDeck({ id: deckId })
    toast.success("Deck removed. It's gone for good!")
    /* после удаления колоды - вернем пользователя на страницу колод.
       если этого не сделать, то попадем в Error404 */
    navigate(PATH.DECKSPAGE)
  }

  // Создаем ref который открывает модальное окно
  const deleteDeckRef = useRef<HTMLDivElement>(null)

  // Повешали событие, которое срабатывает при клике на Item
  const triggerDeleteDeckClick = () => {
    if (deleteDeckRef.current !== null) {
      deleteDeckRef.current.click()
    }
  }

  // ----- Показывать Loader -----
  const isShowLineLoader = isDeleteLoading || isUpdateLoading || isGetDeckByIdLoading

  return (
    <>
      {isShowLineLoader && <LineLoader />}
      <Dropdown.Root trigger={<Icon iconId={'group1399'} />}>
        <Dropdown.Item onClick={learnHandler}>
          <Icon iconId={'playCircleOutline'} />
          <Typography.Caption>Learn</Typography.Caption>
        </Dropdown.Item>
        <Dropdown.Separator />
        <Dropdown.Item className={s.itemDrop} onClick={triggerEditDeckClick}>
          <IconButton iconId={'editOutline'} />
          <Typography.Caption>Edit</Typography.Caption>
        </Dropdown.Item>
        <Dropdown.Separator />
        <Dropdown.Item className={s.itemDrop} onClick={triggerDeleteDeckClick}>
          <IconButton iconId={'trashOutline'} />
          <Typography.Caption>Delete</Typography.Caption>
        </Dropdown.Item>
      </Dropdown.Root>

      <DeckModal
        deckData={{
          cover: deckByIdData?.cover,
          isPrivate: deckByIdData?.isPrivate,
          name: deckByIdData?.name,
        }}
        onSubmit={updateDeckHandler}
        ref={editDeckRef}
        style={{ display: 'none' }}
        variant={'edit'}
      />
      <CardDeleteModal
        cardName={deckByIdData?.name}
        deleteCb={deleteDeckHandler}
        ref={deleteDeckRef}
        style={{ display: 'none' }}
        type={'Deck'}
      />
    </>
  )
}
