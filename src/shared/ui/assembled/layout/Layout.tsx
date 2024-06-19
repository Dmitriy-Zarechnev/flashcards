import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'
import { Outlet } from 'react-router-dom'

import { PageHeader } from '@/shared'
import { clsx } from 'clsx'

import s from './Layout.module.scss'

type LayoutProps = {} & ComponentPropsWithoutRef<'div'>

export const Layout = forwardRef<ElementRef<'div'>, LayoutProps>(({ className, ...rest }, ref) => {
  return (
    <div ref={ref} {...rest} className={clsx(s.layout, className)}>
      <PageHeader isSingUp />
      <main>
        <Outlet />
      </main>
    </div>
  )
})
