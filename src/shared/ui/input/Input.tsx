import { ComponentPropsWithoutRef, forwardRef, useId } from 'react'

import { Typography } from '@/shared'
import { clsx } from 'clsx'

import s from './Input.module.scss'

export type InputProps = {
  error?: string
  inputClassName?: string
  label?: string
  onValueChange?: (value: string) => void
} & ComponentPropsWithoutRef<'input'>

export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      className,
      disabled,
      error,
      id,
      inputClassName,
      label,
      onChange,
      placeholder,
      value,
      ...rest
    },
    ref
  ) => {
    const inputId = useId()
    const finalId = id || inputId

    return (
      <div className={clsx(s.inputWrapper, className)}>
        {label && (
          <Typography.Body2 as={'label'} htmlFor={finalId}>
            {label}
          </Typography.Body2>
        )}
        <input
          className={clsx(s.input, error && s.error, inputClassName)}
          disabled={disabled}
          id={finalId}
          {...rest}
          onChange={onChange}
          placeholder={placeholder || label}
          ref={ref}
          value={value}
        />
        <Typography.Caption>{error}</Typography.Caption>
      </div>
    )
  }
)
