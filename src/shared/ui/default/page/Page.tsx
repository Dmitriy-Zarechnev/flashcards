import { CSSProperties, ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'

import { clsx } from 'clsx'

import s from './Page.module.scss'

type PageProps = {
  mt?: CSSProperties['marginTop']
} & ComponentPropsWithoutRef<'div'>

export const Page = forwardRef<ElementRef<'div'>, PageProps>(
  ({ className, mt = '33px', style, ...rest }, ref) => {
    const classes = clsx(s.container, className)
    const styles: CSSProperties = { marginTop: mt, ...style }

    return <div className={classes} ref={ref} style={styles} {...rest} />
  }
)
