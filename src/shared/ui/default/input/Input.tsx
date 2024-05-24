import { ComponentPropsWithoutRef, forwardRef, useId } from 'react'

import { Typography } from '@/shared'
import { clsx } from 'clsx'

import s from './Input.module.scss'

type InputProps = {
  error?: string
  label?: string
} & ComponentPropsWithoutRef<'input'>

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, disabled, error, id, label, onChange, placeholder, value, ...rest }, ref) => {
    const inputId = useId()
    const finalId = id || inputId

    return (
      <div className={clsx(s.inputWrapper, className)}>
        {label && (
          <Typography.Body2 as={'label'} className={s.label} htmlFor={finalId}>
            {label}
          </Typography.Body2>
        )}
        <input
          className={clsx(s.input, error && s.error)}
          disabled={disabled}
          id={finalId}
          {...rest}
          onChange={onChange}
          placeholder={placeholder || label}
          ref={ref}
          value={value}
        />
        <Typography.Caption className={s.errorText}>{error}</Typography.Caption>
      </div>
    )
  }
)
