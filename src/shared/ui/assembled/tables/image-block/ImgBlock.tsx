import { ComponentPropsWithoutRef } from 'react'

import { Typography } from '@/shared'
import { clsx } from 'clsx'

import s from './ImgBlock.module.scss'

type ImgBlockProps = {
  title: string
  url: string
} & ComponentPropsWithoutRef<'div'>

export const ImgBlock = ({ className, title, url, ...rest }: ImgBlockProps) => {
  return (
    <div className={clsx(s.wrapper, className)} {...rest}>
      <img alt={`${title} picture`} className={s.cardsImg} src={url} />
      <Typography.Body2>{title}</Typography.Body2>
    </div>
  )
}
