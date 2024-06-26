import { ComponentPropsWithoutRef } from 'react'

import { Icon } from '@/shared'
import { clsx } from 'clsx'

import s from './IconButton.module.scss'

type IconButtonProps = {
  height?: string
  iconId: string
  viewBox?: string
  width?: string
} & ComponentPropsWithoutRef<'button'>

export const IconButton = ({
  className,
  height = '16px',
  iconId,
  onClick,
  viewBox,
  width = '16px',
  ...rest
}: IconButtonProps) => {
  return (
    <button className={clsx(s.iconButton, className)} onClick={onClick} type={'button'} {...rest}>
      <Icon height={height} iconId={iconId} viewBox={viewBox} width={width} />
    </button>
  )
}
