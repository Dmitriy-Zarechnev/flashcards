import { ComponentPropsWithoutRef, ElementType } from 'react'

import { clsx } from 'clsx'

import s from '@/shared/components/card/Card.module.scss'

type CardProps<T extends ElementType = 'div'> = {
  as?: T
} & ComponentPropsWithoutRef<T>

export const Card = <T extends ElementType = 'div'>(props: CardProps<T>) => {
  const { as: Component = 'div', children, className, ...rest } = props

  return (
    <Component className={clsx(s.card, className)} {...rest}>
      {children}
    </Component>
  )
}
