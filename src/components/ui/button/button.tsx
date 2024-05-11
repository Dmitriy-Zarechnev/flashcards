import { ComponentPropsWithoutRef, ElementType, ReactNode } from 'react'

import { Icon } from '@/components/ui/icon/icon'

import s from './button.module.scss'

export type ButtonProps<T extends ElementType = 'button'> = {
  as?: T
  children: ReactNode
  className?: string
  fullWidth?: boolean
  img?: boolean
  variant?: 'primary' | 'secondary'
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
      className={` ${s.button} ${s[variant]} ${fullWidth ? s.fullWidth : ''} ${className}`}
      {...rest}
    >
      {img && <Icon className={s.img} iconId={'logOut'} />}
      {children}
    </Component>
  )
}
