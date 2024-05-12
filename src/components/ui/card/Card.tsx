import { ComponentPropsWithoutRef, ElementType } from 'react'

import s from '@/components/ui/card/Card.module.scss'

type CardProps<T extends ElementType = 'div'> = {
  as?: T
} & ComponentPropsWithoutRef<T>

export const Card = <T extends ElementType = 'div'>(props: CardProps<T>) => {
  const { as: Component = 'div', children, className, ...rest } = props

  return (
    <Component className={`${s.card} ${className}`} {...rest}>
      {children}
    </Component>
  )
}
