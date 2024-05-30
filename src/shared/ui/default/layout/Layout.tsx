import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'

import { PageHeader } from '@/shared'
import { clsx } from 'clsx'

import s from './Layout.module.scss'
type LayoutProps = {} & ComponentPropsWithoutRef<'div'>

export const Layout = forwardRef<ElementRef<'div'>, LayoutProps>(
  ({ children, className, ...rest }, ref) => {
    return (
      <div ref={ref} {...rest} className={clsx(s.layout, className)}>
        <PageHeader isSingUp />
        <main className={s.main}>{children}</main>
      </div>
    )
  }
)
