import { ComponentPropsWithoutRef } from 'react'

import { CardFormValues, CardModal, DeckFormValues, DeckModal } from '@/entities'
import { Button, ButtonTitle, DropdownMenu, Typography } from '@/shared'
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
  const buttonTypeDecider = () => {
    if (isCardExist && !userId) {
      return
    }

    if (buttonType === 'Card') {
      if (!userId) {
        return <Button variant={'primary'}>Learn cards</Button>
      }

      return <CardModal onSubmit={onSubmitAddCard} variant={'add'} />
    } else {
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
