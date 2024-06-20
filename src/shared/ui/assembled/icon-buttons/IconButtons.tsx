import { ComponentPropsWithoutRef } from 'react'

import { CardDeleteModal } from '@/entities'
import { IconButton } from '@/shared'
import { clsx } from 'clsx'

import s from './IconButtons.module.scss'

type IconButtonsProps = {
  cardName: string
  disabled: boolean
  editFunction?: () => void
  playFunction?: () => void
  showEditButtons?: boolean
  showPlayButton?: boolean
  trashFunction: () => Promise<any>
} & ComponentPropsWithoutRef<'div'>

export const IconButtons = ({
  cardName,
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
          <CardDeleteModal cardName={cardName} deleteCb={trashFunction} type={'Deck'} />
        </>
      )}
    </div>
  )
}
