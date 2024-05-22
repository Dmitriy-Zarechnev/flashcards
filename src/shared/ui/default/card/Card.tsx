import { ComponentPropsWithoutRef, ElementType } from 'react'

import { clsx } from 'clsx'

import s from './Card.module.scss'

type CardProps<T extends ElementType = 'div'> = {
  as?: T
  fullWidth?: boolean
} & ComponentPropsWithoutRef<T>

export const Card = <T extends ElementType = 'div'>(props: CardProps<T>) => {
  const { as: Component = 'div', children, className, fullWidth, ...rest } = props

  return (
    <Component className={clsx(s.card, fullWidth && s.fullWidth, className)} {...rest}>
      {children}
    </Component>
  )
}
