import { ComponentPropsWithoutRef, ElementType } from 'react'

import { Icon } from '@/shared/components/icon'
import { Typography } from '@/shared/components/typography'
import { clsx } from 'clsx'

import s from './Button.module.scss'

type ButtonProps<T extends ElementType = 'button'> = {
  as?: T
  fullWidth?: boolean
  img?: boolean
  imgId?: string
  variant: 'primary' | 'secondary'
} & ComponentPropsWithoutRef<T>

export const Button = <T extends ElementType = 'button'>(props: ButtonProps<T>) => {
  const {
    as: Component = 'button',
    children,
    className,
    fullWidth,
    img = false,
    imgId = 'logOut',
    variant = 'primary',
    ...rest
  } = props

  return (
    <Component
      className={clsx(s.button, s[variant], fullWidth && s.fullWidth, className)}
      {...rest}
    >
      {img && <Icon height={'16px'} iconId={imgId} width={'16px'} />}
      <Typography.Subtitle2>{children}</Typography.Subtitle2>
    </Component>
  )
}
