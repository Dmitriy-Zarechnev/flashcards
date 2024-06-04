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
  onChange?: (value: string) => void
  options: Options[]
} & ComponentPropsWithRef<typeof Radio.Root>

export const RadioGroup = forwardRef<ElementRef<typeof Radio.Root>, RadioGroupProps>(
  ({ disabled = false, onChange, options, value, ...rest }, ref) => {
    return (
      <Radio.Root
        className={s.RadioRoot}
        {...rest}
        onValueChange={onChange}
        ref={ref}
        value={value}
      >
        {options.map(el => {
          return (
            <div className={s.RadioItemWrapper} key={el.id}>
              <Radio.Item className={s.RadioItem} disabled={disabled} id={el.id} value={el.value}>
                <Radio.Indicator className={s.RadioIndicator} />
              </Radio.Item>
              <Typography.Body2 as={'label'} className={s.RadioLabel} htmlFor={el.id}>
                {el.label}
              </Typography.Body2>
            </div>
          )
        })}
      </Radio.Root>
    )
  }
)
