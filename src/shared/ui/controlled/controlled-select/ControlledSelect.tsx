import { FieldValues, UseControllerProps, useController } from 'react-hook-form'

import { Select, SelectProps } from '@/shared'

export type ControlledSelectProps<T extends FieldValues> = Omit<
  SelectProps,
  'currentValue' | 'onValueChange'
> &
  UseControllerProps<T>

export const ControlledSelect = <T extends FieldValues>({
  control,
  name,
  rules,
  shouldUnregister,
  ...selectProps
}: ControlledSelectProps<T>) => {
  const {
    field: { onChange, value, ...field },
  } = useController({
    control,
    name,
    rules,
    shouldUnregister,
  })

  return <Select currentValue={value} onValueChange={onChange} {...field} {...selectProps} />
}
