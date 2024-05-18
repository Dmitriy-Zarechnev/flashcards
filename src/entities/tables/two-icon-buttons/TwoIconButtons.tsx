import { ComponentPropsWithoutRef } from 'react'

import { IconButton } from '@/shared/components'
import { clsx } from 'clsx'

import s from './TwoIconButtons.module.scss'

type IconButtonsProps = {
  id: string
} & ComponentPropsWithoutRef<'div'>

export const TwoIconButtons = ({ className, id, ...rest }: IconButtonsProps) => {
  const editButtonClickHandler = () => {}
  const trashButtonClickHandler = () => {}

  return (
    <div className={clsx(s.IconButtonsWrapper, className)} {...rest}>
      <IconButton iconId={'editOutline'} onClick={editButtonClickHandler} />
      <IconButton iconId={'trashOutline'} onClick={trashButtonClickHandler} />
    </div>
  )
}
