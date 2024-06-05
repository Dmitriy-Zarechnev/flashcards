import { ComponentPropsWithoutRef } from 'react'

import { Button, DropdownMenu, Typography } from '@/shared'
import { clsx } from 'clsx'

import s from './ListHeader.module.scss'

type ListHeaderProps = {
  buttonTitle: string
  onButtonClick?: () => void
  title: string
  userId?: boolean
} & ComponentPropsWithoutRef<'div'>

export const ListHeader = ({
  buttonTitle,
  className,
  onButtonClick,
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
      <Button className={s.button} onClick={onButtonClick} variant={'primary'}>
        {buttonTitle}
      </Button>
    </div>
  )
}
