import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'

import { clsx } from 'clsx'

import s from './Tables.module.scss'

export const Table = forwardRef<ElementRef<'table'>, ComponentPropsWithoutRef<'table'>>(
  ({ className, ...rest }, ref) => {
    const newClassName = clsx(s.table, className)

    return <table className={newClassName} {...rest} ref={ref} />
  }
)

export const TableHead = forwardRef<ElementRef<'thead'>, ComponentPropsWithoutRef<'thead'>>(
  ({ className, ...rest }, ref) => {
    const newClassName = clsx(s.thead, className)

    return <thead className={newClassName} {...rest} ref={ref} />
  }
)

export const TableBody = forwardRef<ElementRef<'tbody'>, ComponentPropsWithoutRef<'tbody'>>(
  ({ className, ...rest }, ref) => {
    const newClassName = clsx(s.tbody, className)

    return <tbody className={newClassName} {...rest} ref={ref} />
  }
)

export const TableRow = forwardRef<ElementRef<'tr'>, ComponentPropsWithoutRef<'tr'>>(
  ({ className, ...rest }, ref) => {
    const newClassName = clsx(s.tr, className)

    return <tr className={newClassName} {...rest} ref={ref} />
  }
)

export const TableHeadCell = forwardRef<ElementRef<'th'>, ComponentPropsWithoutRef<'th'>>(
  ({ className, ...rest }, ref) => {
    const newClassName = clsx(s.th, className)

    return <th className={newClassName} {...rest} ref={ref} />
  }
)

export const TableBodyCell = forwardRef<ElementRef<'td'>, ComponentPropsWithoutRef<'td'>>(
  ({ className, ...rest }, ref) => {
    const newClassName = clsx(s.td, className)

    return <td className={newClassName} {...rest} ref={ref} />
  }
)
