import { ComponentPropsWithoutRef } from 'react'

import { IconButton, Typography } from '@/shared'
import { clsx } from 'clsx'

import s from './HeadCellWithArrow.module.scss'

type HeadCellWithArrowProps = {
  arrowDirection?: boolean
  title: string
} & ComponentPropsWithoutRef<'div'>

export const HeadCellWithArrow = ({
  arrowDirection = false,
  className,
  title,
  ...rest
}: HeadCellWithArrowProps) => {
  const arrow = arrowDirection ? 'arrowDownOutline' : 'arrowUpOutline'

  return (
    <div className={clsx(s.tableHeadCell, className)} {...rest}>
      <Typography.Subtitle2 className={s.typography}>{title}</Typography.Subtitle2>
      <IconButton height={'20px'} iconId={`${arrow}`} width={'20px'} />
    </div>
  )
}
