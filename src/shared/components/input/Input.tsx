import { ComponentPropsWithoutRef, forwardRef, useId } from 'react'

import { Typography } from '@/shared/components/typography'
import { clsx } from 'clsx'

import s from './Input.module.scss'

type InputProps = {
  error?: string
  label?: string
} & ComponentPropsWithoutRef<'input'>

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, disabled, error, id, label, placeholder, ...rest }, ref) => {
    const inputId = useId()
    const finalId = id || inputId

    return (
      <div className={clsx(s.inputWrapper)}>
        {label && (
          <Typography.Body2 as={'label'} className={s.label} htmlFor={finalId}>
            {label}
          </Typography.Body2>
        )}
        <input
          className={clsx(s.input, error && s.error, className)}
          disabled={disabled}
          id={finalId}
          {...rest}
          placeholder={placeholder || label}
          ref={ref}
        />
        <Typography.Caption className={s.errorText}>{error}</Typography.Caption>
      </div>
    )
  }
)
