import { ComponentPropsWithoutRef } from 'react'
import { Link } from 'react-router-dom'

import { CardFormValues, CardModal, DeckFormValues, DeckModal } from '@/entities'
import { useIdFromParams } from '@/pages/hooks/useIdFromParams'
import { Button, ButtonTitle, DropdownMenu, Typography } from '@/shared'
import { PATH } from '@/shared/utils/routerVariables'
import { clsx } from 'clsx'

import s from './ListHeader.module.scss'

type ListHeaderProps = {
  buttonType?: ButtonTitle
  isCardExist?: boolean
  onSubmitAddCard?: (data: CardFormValues) => Promise<any>
  onSubmitAddDeck?: (data: DeckFormValues) => Promise<any>
  startLearnCards?: () => void
  title: string
  userId?: boolean
} & ComponentPropsWithoutRef<'div'>

export const ListHeader = ({
  buttonType,
  className,
  isCardExist,
  onSubmitAddCard,
  onSubmitAddDeck,
  title,
  userId,
  ...rest
}: ListHeaderProps) => {
  // ----- Достали deck id из url-а -----
  const { deckId } = useIdFromParams()

  const buttonTypeDecider = () => {
    // Если колода пустая и создана не мной, то тогда без кнопки
    if (isCardExist && !userId) {
      return
    }

    if (buttonType === 'Card') {
      if (!userId) {
        // Если колода непустая и создана не мной, то кнопка учить
        return (
          <Button as={Link} to={`${PATH.DECKSPAGE}/${deckId}/learn`} variant={'primary'}>
            Learn cards
          </Button>
        )
      }

      // Если колода пустая и создана мной, то кнопка добавить карточки
      return <CardModal onSubmit={onSubmitAddCard} variant={'add'} />
    } else {
      // Если страница колод, то кнопка добавить колоду
      return <DeckModal onSubmit={onSubmitAddDeck} variant={'add'} />
    }
  }

  return (
    <div className={clsx(s.listHeader, className)} {...rest}>
      <div className={s.titleBox}>
        <Typography.H1>{title}</Typography.H1>
        {userId && <DropdownMenu />}
      </div>
      {buttonTypeDecider()}
    </div>
  )
}
