import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'

import { Icon, Typography } from '@/shared'
import { Listbox, ListboxButton, ListboxOption, ListboxOptions } from '@headlessui/react'
import { clsx } from 'clsx'

import s from './Select.module.scss'

type OptionsType =
  | { label: number; value: number }
  | { label: number; value: string }
  | { label: string; value: number }
  | { label: string; value: string }

export type SelectProps = {
  currentValue: number | string
  fullWidth?: boolean
  isActiveBackgroundBlocked?: boolean
  onValueChange: (id: number | string) => void
  options: OptionsType[]
  selectTitle?: string
} & ComponentPropsWithoutRef<'select'>

export const Select = forwardRef<ElementRef<'select'>, SelectProps>(
  (
    {
      className,
      currentValue,
      disabled = false,
      fullWidth = true,
      isActiveBackgroundBlocked = false,
      onValueChange,
      options,
      selectTitle,
    },
    ref
  ) => {
    const currentLabel = options.filter(el => el.value === currentValue)[0].label

    return (
      <div>
        <Typography.Body2 className={clsx(s.SelectLabel, { [s.disabled]: disabled })}>
          {selectTitle}
        </Typography.Body2>
        <Listbox disabled={disabled} onChange={onValueChange} ref={ref} value={currentValue}>
          {({ open }) => (
            <div className={clsx(s.FatherRelative, fullWidth && s.fullWidth, className)}>
              <ListboxButton className={clsx(s.SelectTrigger, fullWidth && s.fullWidth)}>
                {currentLabel}
                <Icon
                  height={'16px'}
                  iconId={open ? 'arrowUpOutline' : 'arrowDownOutline'}
                  width={'16px'}
                />
              </ListboxButton>
              <ListboxOptions
                {...(!fullWidth && { anchor: 'bottom' })}
                className={clsx(s.SelectGroup, fullWidth && s.fullWidth)}
              >
                {options.map(el => (
                  <ListboxOption
                    className={({ focus, selected }) =>
                      clsx(s.SelectItem, {
                        [s.focus]: focus,
                        [s.selected]: selected && !isActiveBackgroundBlocked,
                      })
                    }
                    key={el.value}
                    value={el.value}
                  >
                    {el.label}
                  </ListboxOption>
                ))}
              </ListboxOptions>
            </div>
          )}
        </Listbox>
      </div>
    )
  }
)
