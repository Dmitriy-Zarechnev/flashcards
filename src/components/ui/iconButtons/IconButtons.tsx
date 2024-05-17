import { ComponentPropsWithoutRef } from 'react'

import { Icon } from '@/components/ui/icon'
import { clsx } from 'clsx'

import s from './IconButtons.module.scss'

type IconButtonProps = {
  height?: string
  iconId: string
  onClick: () => void
  width?: string
}

type IconButtonsProps = {
  id: string
} & ComponentPropsWithoutRef<'div'>

export const IconButtons = ({ className, id, ...rest }: IconButtonsProps) => {
  const buttonClickHandler = () => {
    console.log(id)
  }

  return (
    <div className={clsx(s.IconButtonsWrapper, className)} {...rest}>
      <IconButton iconId={'playCircleOutline'} onClick={buttonClickHandler} />
      <IconButton iconId={'editOutline'} onClick={buttonClickHandler} />
      <IconButton iconId={'trashOutline'} onClick={buttonClickHandler} />
    </div>
  )
}

export const IconButton = ({
  height = '16px',
  iconId,
  onClick,
  width = '16px',
}: IconButtonProps) => {
  return (
    <button className={s.IconButton} onClick={onClick}>
      <Icon height={height} iconId={iconId} width={width} />
    </button>
  )
}
