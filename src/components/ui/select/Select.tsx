import { Icon } from '@/components/ui/icon'
import { Typography } from '@/components/ui/typography'
import { Listbox, ListboxButton, ListboxOption, ListboxOptions } from '@headlessui/react'
import { clsx } from 'clsx'

import s from './Select.module.scss'

type OptionsType =
  | { label: number; value: number }
  | { label: number; value: string }
  | { label: string; value: number }
  | { label: string; value: string }

type SelectProps = {
  className?: string
  currentValue: number | string
  disabled?: boolean
  fullWidth?: boolean
  onChange: (id: number | string) => void
  options: OptionsType[]
  selectTitle?: string
}

export const Select = ({
  className,
  currentValue,
  disabled = false,
  fullWidth = true,
  onChange,
  options,
  selectTitle,
}: SelectProps) => {
  const currentLabel = options.filter(el => el.value === currentValue)[0].label

  return (
    <div>
      <Typography.Body2 className={clsx(s.SelectLabel, { [s.disabled]: disabled })}>
        {selectTitle}
      </Typography.Body2>
      <Listbox disabled={disabled} onChange={onChange} value={currentValue}>
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
                      [s.selected]: selected,
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
