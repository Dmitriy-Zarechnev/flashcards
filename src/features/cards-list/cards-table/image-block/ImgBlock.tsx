import { CSSProperties, ComponentPropsWithoutRef, ElementType } from 'react'

import { Typography } from '@/shared'
import { clsx } from 'clsx'

import s from './ImgBlock.module.scss'

type ImgBlockProps<T extends ElementType = 'div'> = {
  as?: T
  title: string
  url: string
  wd?: CSSProperties['width']
} & ComponentPropsWithoutRef<T>

export const ImgBlock = <T extends ElementType = 'div'>(props: ImgBlockProps<T>) => {
  const { as: Component = 'div', className, style, title, url, wd = '150px', ...rest } = props

  const styles: CSSProperties = { width: wd, ...style }

  return (
    <Component className={clsx(s.wrapper, className)} {...rest}>
      <img alt={`Picture`} className={s.cardsImg} src={url} />
      <Typography.Body2 className={s.typography} style={styles}>
        {title}
      </Typography.Body2>
    </Component>
  )
}
