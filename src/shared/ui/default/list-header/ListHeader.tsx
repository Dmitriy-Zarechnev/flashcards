import { ComponentPropsWithoutRef } from 'react'

import { Button, DropdownMenu, Typography } from '@/shared'
import { clsx } from 'clsx'

import s from './ListHeader.module.scss'

type ListHeaderProps = {
  buttonTitle: string
  title: string
  userId?: boolean
} & ComponentPropsWithoutRef<'div'>

export const ListHeader = ({
  buttonTitle,
  className,
  title,
  userId = false,
  ...rest
}: ListHeaderProps) => {
  return (
    <div className={clsx(s.listHeader, className)} {...rest}>
      <Typography.H1>{title}</Typography.H1>
      {userId && <DropdownMenu />}
      <Button className={s.button} variant={'primary'}>
        {buttonTitle}
      </Button>
    </div>
  )
}
