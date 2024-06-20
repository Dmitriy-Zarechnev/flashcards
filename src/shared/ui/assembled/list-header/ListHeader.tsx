import { ComponentPropsWithoutRef } from 'react'

import { CardModal, DeckFormValues, DeckModal } from '@/entities'
import { DropdownMenu, Typography } from '@/shared'
import { clsx } from 'clsx'

import s from './ListHeader.module.scss'

type ListHeaderProps = {
  buttonTitle: string
  onSubmitAddDeck: (data: DeckFormValues) => Promise<any>
  title: string
  userId?: boolean
} & ComponentPropsWithoutRef<'div'>

export const ListHeader = ({
  buttonTitle,
  className,
  onSubmitAddDeck,
  title,
  userId = false,
  ...rest
}: ListHeaderProps) => {
  return (
    <div className={clsx(s.listHeader, className)} {...rest}>
      <div className={s.titleBox}>
        <Typography.H1>{title}</Typography.H1>
        {userId && <DropdownMenu />}
      </div>
      <CardModal variant={''} />
      <DeckModal onSubmit={onSubmitAddDeck} variant={'add'} />
    </div>
  )
}
