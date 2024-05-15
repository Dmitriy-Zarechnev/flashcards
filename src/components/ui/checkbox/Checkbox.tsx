import { HTMLProps } from 'react'

import * as C from '@radix-ui/react-checkbox'
import { clsx } from 'clsx'

import s from './Checkbox.module.scss'

type CheckboxProps = {
  checked: boolean
  id?: string
  onChange: (checked: boolean) => void
  /** When true, indicates that the user must check the checkbox
   * before the owning form can be submitted. */
  required?: boolean
} & HTMLProps<HTMLDivElement>

export const Checkbox = ({
  checked,
  children,
  className,
  disabled,
  id,
  onChange,
  required,
  ...rest
}: CheckboxProps) => {
  return (
    <div className={clsx(s.checkbox, className)} {...rest}>
      <C.Root
        checked={checked}
        className={s.root}
        defaultChecked
        disabled={disabled}
        id={id}
        onCheckedChange={onChange}
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
