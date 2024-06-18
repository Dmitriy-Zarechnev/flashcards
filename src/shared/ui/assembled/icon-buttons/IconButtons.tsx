import { ComponentPropsWithoutRef } from 'react'

import { IconButton } from '@/shared'
import { clsx } from 'clsx'

import s from './IconButtons.module.scss'

type IconButtonsProps = {
  editFunction?: () => void
  playFunction?: () => void
  showEditButtons?: boolean
  showPlayButton?: boolean
  trashFunction?: () => void
} & ComponentPropsWithoutRef<'div'>

export const IconButtons = ({
  className,
  editFunction,
  playFunction,
  showEditButtons = true,
  showPlayButton = false,
  trashFunction,
  ...rest
}: IconButtonsProps) => {
  return (
    <div className={clsx(s.IconButtonsWrapper, className)} {...rest}>
      {showPlayButton && <IconButton iconId={'playCircleOutline'} onClick={playFunction} />}
      {showEditButtons && (
        <>
          <IconButton iconId={'editOutline'} onClick={editFunction} />
          <IconButton iconId={'trashOutline'} onClick={trashFunction} />
        </>
      )}
    </div>
  )
}
