import { ComponentPropsWithRef, ElementRef, forwardRef } from 'react'

import { Typography } from '@/shared'
import * as Radio from '@radix-ui/react-radio-group'

import s from './RadioGroup.module.scss'

type Options = {
  id: string
  label: string
  value: string
}

export type RadioGroupProps = {
  disabled?: boolean
  options: Options[]
} & ComponentPropsWithRef<typeof Radio.Root>

export const RadioGroup = forwardRef<ElementRef<typeof Radio.Root>, RadioGroupProps>(
  ({ disabled = false, onValueChange, options, value, ...rest }, ref) => {
    return (
      <Radio.Root
        className={s.radioRoot}
        {...rest}
        onValueChange={onValueChange}
        ref={ref}
        value={value}
      >
        {options.map(el => {
          return (
            <div className={s.radioItemWrapper} key={el.id}>
              <Radio.Item className={s.radioItem} disabled={disabled} id={el.id} value={el.value}>
                <Radio.Indicator className={s.radioIndicator} />
              </Radio.Item>
              <Typography.Body2 as={'label'} className={s.radioLabel} htmlFor={el.id}>
                {el.label}
              </Typography.Body2>
            </div>
          )
        })}
      </Radio.Root>
    )
  }
)
