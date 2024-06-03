import { ComponentPropsWithoutRef } from 'react'

import { Icon } from '@/shared'
import { clsx } from 'clsx'

import s from './Rating.module.scss'

//export type RatingValueType = 0 | 1 | 2 | 3 | 4 | 5

type RatingProps = {
  rating?: number
} & ComponentPropsWithoutRef<'div'>

type StarProps = {
  selected: boolean
}

export const Rating = ({ className, rating = 0, ...rest }: RatingProps) => {
  return (
    <div className={clsx(s.RatingWrapper, className)} {...rest}>
      {[1, 2, 3, 4, 5].map((el, i) => {
        return <Star key={el} selected={rating > i} />
      })}
      {/*<Star selected={rating > 0} />*/}
      {/*<Star selected={rating > 1} />*/}
      {/*<Star selected={rating > 2} />*/}
      {/*<Star selected={rating > 3} />*/}
      {/*<Star selected={rating > 4} />*/}
    </div>
  )
}

const Star = ({ selected }: StarProps) => {
  return (
    <Icon
      height={'14px'}
      iconId={selected ? 'filledStar' : 'notFilledStar'}
      viewBox={'0 0 14 14'}
      width={'14px'}
    />
  )
}
