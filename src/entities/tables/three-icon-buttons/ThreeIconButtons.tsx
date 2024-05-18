import { ComponentPropsWithoutRef } from 'react'

import { IconButton } from '@/shared/components'
import { clsx } from 'clsx'

import s from './ThreeIconButtons.module.scss'

type IconButtonsProps = {
  editFunction: () => void
  id: string
  playFunction: () => void
  trashFunction: () => void
} & ComponentPropsWithoutRef<'div'>

export const ThreeIconButtons = ({
  className,
  editFunction,
  id,
  playFunction,
  trashFunction,
  ...rest
}: IconButtonsProps) => {
  return (
    <div className={clsx(s.IconButtonsWrapper, className)} {...rest}>
      <IconButton iconId={'playCircleOutline'} onClick={playFunction} />
      <IconButton iconId={'editOutline'} onClick={editFunction} />
      <IconButton iconId={'trashOutline'} onClick={trashFunction} />
    </div>
  )
}
