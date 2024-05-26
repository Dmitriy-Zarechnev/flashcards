import { FieldValues, UseControllerProps, useController } from 'react-hook-form'

import { PasswordInput, PasswordInputProps } from '@/shared'

type ControlledTextFieldProps<T extends FieldValues> = Omit<
  PasswordInputProps,
  'error' | 'id' | 'onChange' | 'value'
> &
  UseControllerProps<T>

export const PasswordField = <T extends FieldValues>({
  control,
  defaultValue,
  name,
  rules,
  shouldUnregister,
  ...rest
}: ControlledTextFieldProps<T>) => {
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

  return (
    <PasswordInput
      {...field}
      {...{ ...rest, id: name, onChange, value }}
      error={error?.message}
      type={'password'}
    />
  )
}
