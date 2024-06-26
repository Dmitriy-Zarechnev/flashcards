import { ComponentPropsWithoutRef, ElementRef, forwardRef, useId } from 'react'

import * as C from '@radix-ui/react-checkbox'
import { clsx } from 'clsx'

import s from './Checkbox.module.scss'

export type CheckboxProps = {
  required?: boolean
} & ComponentPropsWithoutRef<typeof C.Root>

export const Checkbox = forwardRef<ElementRef<typeof C.Root>, CheckboxProps>(
  ({ children, className, disabled, id, required, ...rest }, ref) => {
    const generatedId = useId()
    const finalId = id || `${generatedId}-checkbox`

    return (
      <div className={clsx(s.checkbox, disabled && s.checkboxDisabled, className)}>
        <C.Root
          {...rest}
          className={s.root}
          disabled={disabled}
          id={finalId}
          ref={ref}
          required={required}
        >
          <C.Indicator className={s.indicator}>✔</C.Indicator>
        </C.Root>
        <label className={clsx(s.label, disabled && s.labelDisabled)} htmlFor={finalId}>
          {children}
        </label>
      </div>
    )
  }
)
