import { ComponentPropsWithoutRef } from 'react'

import { clsx } from 'clsx'

import s from './LineLoader.module.scss'

export const LineLoader = ({ className }: ComponentPropsWithoutRef<'div'>) => {
  return <div className={clsx(s.lineLoader, className)}></div>
}
