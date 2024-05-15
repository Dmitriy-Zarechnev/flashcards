import { Icon } from '@/components/ui/icon'

import s from './Rating.module.scss'

type RatingValueType = 0 | 1 | 2 | 3 | 4 | 5

export const Rating = ({ rating = 0 }: { rating?: RatingValueType }) => {
  return (
    <div className={s.RatingWrapper}>
      <Star selected={rating > 0} />
      <Star selected={rating > 1} />
      <Star selected={rating > 2} />
      <Star selected={rating > 3} />
      <Star selected={rating > 4} />
    </div>
  )
}

const Star = ({ selected }: { selected: boolean }) => {
  return (
    <Icon
      height={'14px'}
      iconId={selected ? 'filledStar' : 'notFilledStar'}
      viewBox={'0 0 14 14'}
      width={'14px'}
    />
  )
}
