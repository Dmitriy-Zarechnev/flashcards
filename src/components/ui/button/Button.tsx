import { ComponentPropsWithoutRef, ElementType } from 'react'

import { Icon } from '@/components/ui/icon'
import { clsx } from 'clsx'

import s from './Button.module.scss'

export type ButtonProps<T extends ElementType = 'button'> = {
  as?: T
  fullWidth?: boolean
  img?: boolean
  variant: 'primary' | 'secondary'
} & ComponentPropsWithoutRef<T>

export const Button = <T extends ElementType = 'button'>(props: ButtonProps<T>) => {
  const {
    as: Component = 'button',
    children,
    className,
    fullWidth,
    img = false,
    variant = 'primary',
    ...rest
  } = props

  return (
    <Component
      className={clsx(s.button, s[variant], fullWidth && s.fullWidth, className)}
      {...rest}
    >
      {img && <Icon height={'16px'} iconId={'logOut'} width={'16px'} />}
      {children}
    </Component>
  )
}
