import { ComponentPropsWithoutRef } from 'react'

import { IconButton } from '@/shared/components'
import { clsx } from 'clsx'

import s from './TwoIconButtons.module.scss'

type IconButtonsProps = {
  editFunction: () => void
  id: string
  trashFunction: () => void
} & ComponentPropsWithoutRef<'div'>

export const TwoIconButtons = ({
  className,
  editFunction,
  id,
  trashFunction,
  ...rest
}: IconButtonsProps) => {
  return (
    <div className={clsx(s.IconButtonsWrapper, className)} {...rest}>
      <IconButton iconId={'editOutline'} onClick={editFunction} />
      <IconButton iconId={'trashOutline'} onClick={trashFunction} />
    </div>
  )
}
