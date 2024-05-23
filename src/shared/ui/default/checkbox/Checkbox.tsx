import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'

import * as C from '@radix-ui/react-checkbox'
import { clsx } from 'clsx'

import s from './Checkbox.module.scss'

export type CheckboxProps = {
  id?: string
  required?: boolean
} & ComponentPropsWithoutRef<typeof C.Root>

export const Checkbox = forwardRef<ElementRef<typeof C.Root>, CheckboxProps>(
  ({ children, className, disabled, id, required, ...rest }, ref) => {
    return (
      <div className={clsx(s.checkbox, disabled && s.checkboxDisabled, className)}>
        <C.Root
          {...rest}
          className={s.root}
          disabled={disabled}
          id={id}
          ref={ref}
          required={required}
        >
          <C.Indicator className={s.indicator}>✔︎</C.Indicator>
        </C.Root>
        <label className={clsx(s.label, disabled && s.labelDisabled)} htmlFor={id}>
          {children}
        </label>
      </div>
    )
  }
)
