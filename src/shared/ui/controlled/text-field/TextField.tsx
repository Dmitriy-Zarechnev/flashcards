import { FieldValues, UseControllerProps, useController } from 'react-hook-form'

import { Input, InputProps } from '@/shared'

type ControlledTextFieldProps<T extends FieldValues> = Omit<
  InputProps,
  'error' | 'id' | 'onChange' | 'value'
> &
  UseControllerProps<T>

export const TextField = <T extends FieldValues>({
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

  return <Input {...field} {...{ ...rest, id: name, onChange, value }} error={error?.message} />
}
