import { ComponentPropsWithoutRef } from 'react'

import { IconButton } from '@/shared'
import { clsx } from 'clsx'

import s from './IconButtons.module.scss'

type IconButtonsProps = {
  disabled: boolean
  editFunction?: () => void
  playFunction?: () => void
  showEditButtons?: boolean
  showPlayButton?: boolean
  trashFunction?: () => void
} & ComponentPropsWithoutRef<'div'>

export const IconButtons = ({
  className,
  disabled,
  editFunction,
  playFunction,
  showEditButtons = false,
  showPlayButton = true,
  trashFunction,
  ...rest
}: IconButtonsProps) => {
  return (
    <div className={clsx(s.IconButtonsWrapper, className)} {...rest}>
      {showPlayButton && (
        <IconButton disabled={disabled} iconId={'playCircleOutline'} onClick={playFunction} />
      )}
      {showEditButtons && (
        <>
          <IconButton iconId={'editOutline'} onClick={editFunction} />
          <IconButton iconId={'trashOutline'} onClick={trashFunction} />
        </>
      )}
    </div>
  )
}
