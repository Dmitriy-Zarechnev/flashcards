import { ComponentPropsWithoutRef } from 'react'

import { IconButton } from '@/shared/components'
import { clsx } from 'clsx'

import s from './ThreeIconButtons.module.scss'

type IconButtonsProps = {
  id: string
} & ComponentPropsWithoutRef<'div'>

export const ThreeIconButtons = ({ className, id, ...rest }: IconButtonsProps) => {
  const playButtonClickHandler = () => {}
  const editButtonClickHandler = () => {}
  const trashButtonClickHandler = () => {}

  return (
    <div className={clsx(s.IconButtonsWrapper, className)} {...rest}>
      <IconButton iconId={'playCircleOutline'} onClick={playButtonClickHandler} />
      <IconButton iconId={'editOutline'} onClick={editButtonClickHandler} />
      <IconButton iconId={'trashOutline'} onClick={trashButtonClickHandler} />
    </div>
  )
}
