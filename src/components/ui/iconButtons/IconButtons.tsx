import { ComponentPropsWithoutRef } from 'react'

import { Icon } from '@/components/ui/icon'
import { clsx } from 'clsx'

import s from './IconButtons.module.scss'

type IconButtonProps = {
  iconId: string
  onClick: () => void
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

const IconButton = ({ iconId, onClick }: IconButtonProps) => {
  return (
    <button className={s.IconButton} onClick={onClick}>
      <Icon height={'16px'} iconId={iconId} width={'16px'} />
    </button>
  )
}
