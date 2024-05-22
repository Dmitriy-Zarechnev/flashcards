import { ComponentPropsWithoutRef } from 'react'

import { IconButton } from '@/shared'
import { clsx } from 'clsx'

import s from './IconButtons.module.scss'

type IconButtonsProps = {
  editFunction: () => void
  id: string
  playFunction?: () => void
  showPlayButton: boolean
  trashFunction: () => void
} & ComponentPropsWithoutRef<'div'>

export const IconButtons = ({
  className,
  editFunction,
  id,
  playFunction,
  showPlayButton,
  trashFunction,
  ...rest
}: IconButtonsProps) => {
  return (
    <div className={clsx(s.IconButtonsWrapper, className)} {...rest}>
      {showPlayButton && <IconButton iconId={'playCircleOutline'} onClick={playFunction} />}
      <IconButton iconId={'editOutline'} onClick={editFunction} />
      <IconButton iconId={'trashOutline'} onClick={trashFunction} />
    </div>
  )
}
