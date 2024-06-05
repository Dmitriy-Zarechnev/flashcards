import { ComponentPropsWithoutRef, ElementRef, forwardRef, useId } from 'react'

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
  currentValue?: number | string
  fullWidth?: boolean
  isActiveBackgroundBlocked?: boolean
  onValueChange: (id: number | string) => void
  openToUp?: boolean
  options: OptionsType[]
  selectTitle?: string
} & ComponentPropsWithoutRef<typeof Listbox>

export const Select = forwardRef<ElementRef<typeof Listbox>, SelectProps>(
  (
    {
      className,
      currentValue,
      disabled = false,
      fullWidth = true,
      isActiveBackgroundBlocked = false,
      onValueChange,
      openToUp = false,
      options,
      selectTitle,
    },
    ref
  ) => {
    const currentLabel = options.filter(el => el.value === currentValue)[0]?.label

    const generatedId = useId()

    return (
      <div>
        <Typography.Body2 className={clsx(s.selectLabel, { [s.disabled]: disabled })}>
          {selectTitle}
        </Typography.Body2>
        <Listbox disabled={disabled} onChange={onValueChange} ref={ref} value={currentValue}>
          {({ open }) => (
            <div className={clsx(s.fatherRelative, fullWidth && s.fullWidth, className)}>
              <ListboxButton className={clsx(s.selectTrigger, fullWidth && s.fullWidth)}>
                {currentLabel || options[0].label}
                <Icon
                  height={'16px'}
                  iconId={open ? 'arrowUpOutline' : 'arrowDownOutline'}
                  width={'16px'}
                />
              </ListboxButton>
              <ListboxOptions
                {...(!fullWidth && { anchor: 'bottom' })}
                className={clsx(s.selectGroup, fullWidth && s.fullWidth, openToUp && s.openToUp)}
              >
                {options.map(el => (
                  <ListboxOption
                    className={({ focus, selected }) =>
                      clsx(s.selectItem, {
                        [s.focus]: focus,
                        [s.selected]: selected && !isActiveBackgroundBlocked,
                      })
                    }
                    key={generatedId}
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
