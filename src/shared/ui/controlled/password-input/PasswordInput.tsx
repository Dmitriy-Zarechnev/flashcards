import { useState } from 'react'
import { FieldValues, UseControllerProps, useController } from 'react-hook-form'

import { IconButton, Input, InputProps } from '@/shared'
import { clsx } from 'clsx'

import s from './PasswordInput.module.scss'

export type PasswordInputProps<T extends FieldValues> = Omit<
  InputProps,
  'error' | 'id' | 'onChange' | 'value'
> &
  UseControllerProps<T>

export const PasswordInput = <T extends FieldValues>({
  className,
  control,
  defaultValue,
  name,
  rules,
  shouldUnregister,
  ...inputProps
}: PasswordInputProps<T>) => {
  const [showPassword, setShowPassword] = useState(false)

  const {
    field: { onChange, value, ...field },
    fieldState: { error },
  } = useController({
    control,
    defaultValue,
    name,
    rules,
    shouldUnregister,
  })

  const showPasswordClickHandler = () => {
    setShowPassword(!showPassword)
  }

  const showPasswordCondition = showPassword ? { type: 'text' } : { type: 'password' }

  return (
    <div className={clsx(s.passwordInputWrapper, className)}>
      <Input
        inputClassName={s.eyePadding}
        {...showPasswordCondition}
        {...field}
        {...{ id: name, onChange, value }}
        error={error?.message}
        {...inputProps}
      />
      <IconButton
        className={s.eyeIcon}
        height={'20px'}
        iconId={showPassword ? 'eyeOffOutline' : 'eyeOutline'}
        onClick={showPasswordClickHandler}
        width={'20px'}
      />
    </div>
  )
}
