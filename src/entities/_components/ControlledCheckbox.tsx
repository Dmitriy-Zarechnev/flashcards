import { FieldValues, UseControllerProps, useController } from 'react-hook-form'

import { Checkbox, CheckboxProps } from '@/shared'

type ControlledCheckboxProps<T extends FieldValues> = Omit<
  CheckboxProps,
  'id' | 'onChange' | 'value'
> &
  UseControllerProps<T>

export const ControlledCheckbox = <T extends FieldValues>({
  control,
  defaultValue,
  name,
  rules,
  shouldUnregister,
  ...checkboxProps
}: ControlledCheckboxProps<T>) => {
  const {
    field: { onChange, value, ...field },
  } = useController({
    control,
    defaultValue,
    name,
    rules,
    shouldUnregister,
  })

  return (
    <Checkbox
      {...field}
      {...{
        checked: value,
        id: name,
        onCheckedChange: onChange,
        ...checkboxProps,
      }}
    />
  )
}
