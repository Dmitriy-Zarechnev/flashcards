import { ComponentPropsWithoutRef } from 'react'

import { Icon } from '@/components/ui/icon'
import { Typography } from '@/components/ui/typography'
import { clsx } from 'clsx'

import s from './HeadCellWithArrow.module.scss'

type HeadCellWithArrowProps = {
  title: string
} & ComponentPropsWithoutRef<'div'>

export const HeadCellWithArrow = ({ className, title, ...rest }: HeadCellWithArrowProps) => {
  return (
    <div className={clsx(s.TableHeadCell, className)} {...rest}>
      <Typography.Subtitle2>{title}</Typography.Subtitle2>
      <Icon height={'12px'} iconId={'arrowUp'} width={'12px'} />
    </div>
  )
}
