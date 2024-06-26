import { ComponentPropsWithoutRef } from 'react'

import { IconButton, Tables, Typography } from '@/shared'
import { clsx } from 'clsx'

import s from './HeadCellWithArrow.module.scss'

type HeadCellWithArrowProps = {
  arrowDirection?: boolean
  sortTableOnClick?: () => void
  title: string
} & ComponentPropsWithoutRef<'div'>

export const HeadCellWithArrow = ({
  arrowDirection = false,
  className,
  sortTableOnClick,
  title,
  ...rest
}: HeadCellWithArrowProps) => {
  const arrow = arrowDirection ? 'arrowDownOutline' : 'arrowUpOutline'

  return (
    <Tables.TableHeadCell>
      <div className={clsx(s.cellWrapper, className)} onClick={sortTableOnClick} {...rest}>
        <Typography.Subtitle2 style={{ cursor: 'pointer' }}>{title}</Typography.Subtitle2>
        <IconButton height={'20px'} iconId={`${arrow}`} width={'20px'} />
      </div>
    </Tables.TableHeadCell>
  )
}
